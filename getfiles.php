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

// This file returns all files the JS code can read by calling getfile.php?file=XYZ.
// The filenames of the autodl.cfg file and all *.tracker files are returned.

require_once 'getConf.php';

$error = "";
$ary[] = 'autodl.cfg';
$aryTrackers = glob("$trackersDirectory/*.tracker", GLOB_NOSORT | GLOB_ERR);
if ($aryTrackers === false) {
	$error = "Could not read tracker files. Make sure your web server has permission to read the tracker directory!";
}
else {
	foreach ($aryTrackers as $path) {
		if (filesize($path))
			$ary[] = basename($path);
	}
}

$res = Array('error' => $error, 'files' => $ary);
$jsonData = json_encode($res);

$etag = '"' . md5($jsonData) . '"';
$mtime = 1286000000;	// A "valid" Last-Modified time so Chrome tries to GET this file from the server again
checkSameFile($etag, $mtime);

header('Content-Type: application/json');
echo $jsonData;

?>
