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

require_once '../../php/util.php';
eval(getPluginConf('autodl-irssi'));

function removeEndingSlash($dir) {
	if ($dir{strlen($dir)-1} != '/')
		return $dir;
	return substr($dir, 0, strlen($dir) - 1);
}

// Returns true if the filename contains only valid characters
function isValidFilename($filename) {
	return !!preg_match('/^[\w .\-]+$/', $filename);
}

// Sends a 304 if it's the same file (and exists) or returns if the file has changed
// with added ETag and Last-Modified HTTP headers.
function checkSameFile($etag, $mtime) {
	if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) &&
		isset($_SERVER['HTTP_IF_NONE_MATCH']) &&
		strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) === $mtime &&
		trim($_SERVER['HTTP_IF_NONE_MATCH']) === $etag) {
		header("HTTP/1.1 304 Not Modified");
		exit;
	}
	header("ETag: $etag");
	header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $mtime) . ' GMT');
}

$irssiScriptDirectory = removeEndingSlash($irssiScriptDirectory);
$autodlDirectory = removeEndingSlash($autodlDirectory);
$trackersDirectory = "$irssiScriptDirectory/AutodlIrssi/trackers";

?>
