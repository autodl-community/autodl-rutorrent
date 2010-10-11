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

function UploadMethod(idParent)
{
	this.num = UploadMethod.num++;

	$("#" + idParent).html(
		'<label for="' + this.id("method") + '">' + theUILang.autodlChooseUploadMethod + '</label>' +
		'<select id="' + this.id("method") + '">' +
			'<option id="' + this.id("method-watchdir") + '">' + theUILang.autodlSaveToWatchFolder + '</option>' +
			'<option id="' + this.id("method-webui") + '">' + theUILang.autodlUtorrentWebui + '</option>' +
			'<option id="' + this.id("method-ftp") + '">' + theUILang.autodlFtpUpoad + '</option>' +
			'<option id="' + this.id("method-program") + '">' + theUILang.autodlRunProgram + '</option>' +
			'<option id="' + this.id("method-dyndir") + '">' + theUILang.autodlDynamicFolder + '</option>' +
		'</select>' +
		'<div id="' + this.id("watchdir") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("watchdir-folder") + '">' + theUILang.autodlTorrentClientWatchFolder + '</label></td>' +
						'<td><input type="text" id="' + this.id("watchdir-folder") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>' +
		'<div id="' + this.id("webui") + '">' +
			'<p>' + theUILang.autodlOnlyUtorrentWebui + '</p>' +
			'<p>' + theUILang.autodlSettingsInPrefsWebui + '</p>' +
		'</div>' +
		'<div id="' + this.id("ftp") + '">' +
			'<p>' + theUILang.autodlSettingsInPrefsFtp + '</p>' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("ftp-path") + '">' + theUILang.autodlFtpPath + '</label</td>' +
						'<td><input type="text" id="' + this.id("ftp-path") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>' +
		'<div id="' + this.id("program") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("program-command") + '">' + theUILang.autodlCommand + '</label</td>' +
						'<td><input type="text" id="' + this.id("program-command") + '" /></td>' +
					'</tr>' +
					'<tr>' +
						'<td><label for="' + this.id("program-args") + '">' + theUILang.autodlArguments + '</label</td>' +
						'<td><input type="text" id="' + this.id("program-args") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>' +
		'<div id="' + this.id("dyndir") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("dyndir-dir") + '">' + theUILang.autodlFolder + '</label</td>' +
						'<td><input type="text" id="' + this.id("dyndir-dir") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>'
	);

	this.dropdown = new DropDownTabs(this.id("method"));
	this.dropdown.add(this.id("method-watchdir"), this.id("watchdir"));
	this.dropdown.add(this.id("method-webui"), this.id("webui"));
	this.dropdown.add(this.id("method-ftp"), this.id("ftp"));
	this.dropdown.add(this.id("method-program"), this.id("program"));
	this.dropdown.add(this.id("method-dyndir"), this.id("dyndir"));
}

UploadMethod.num = 0;

UploadMethod.prototype.id =
function(id)
{
	return "autodl-upload-" + id + "-" + this.num;
}

UploadMethod.prototype.$id =
function(id)
{
	return "#" + this.id(id);
}
