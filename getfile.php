<?php
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is IRC Auto Downloader.
 *
 * The Initial Developer of the Original Code is
 * David Nilsson.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * ***** END LICENSE BLOCK ***** */

// The JS code calls this file to read the autodl.cfg file and all *.tracker files.
// Only those files can be returned.

require_once 'getConf.php';

function notFound() {
	header("HTTP/1.1 404 Not Found");
	echo "<h1>Not Found</h1><p>404</p>";
	exit;
}

if (!isset($_GET["file"]))
	notFound();
$filename = trim($_GET["file"]);
if (!isValidFilename($filename))
	notFound();

$fileMustExist = true;
if ($filename === 'autodl.cfg') {
	$fileMustExist = false;	// Return a 0-byte file if it doesn't exist
	$contentType = 'text/plain';
	$pathname = "$autodlDirectory/$filename";
}
elseif (preg_match('/\.tracker$/', $filename)) {
	$contentType = 'application/xml';
	$pathname = "$trackersDirectory/$filename";
}
else {
	notFound();
}

$stat = stat($pathname);
if ($stat !== false) {
	$mtime = $stat[9];
	$etag = '"' . md5($mtime . $pathname) . '"';
	checkSameFile($etag, $mtime);
}
$data = file_get_contents($pathname);
if ($data === false && $fileMustExist)
	notFound();

header("Content-Type: $contentType");
if ($data !== false)
	echo $data;

?>
