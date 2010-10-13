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

function UploadMethod(configFile, idParent)
{
	this.configFile = configFile;

	this.num = UploadMethod.num++;

	$("#" + idParent).html(
		'<label for="' + this.id("method") + '">' + theUILang.autodlChooseUploadMethod + '</label>' +
		'<select id="' + this.id("method") + '">' +
			'<option id="' + this.id("method-nothing") + '">' + theUILang.autodlChoose + '</option>' +
			'<option id="' + this.id("method-watchdir") + '">' + theUILang.autodlSaveToWatchFolder + '</option>' +
			'<option id="' + this.id("method-webui") + '">' + theUILang.autodlUtorrentWebui + '</option>' +
			'<option id="' + this.id("method-ftp") + '">' + theUILang.autodlFtpUpoad + '</option>' +
			'<option id="' + this.id("method-program") + '">' + theUILang.autodlRunProgram + '</option>' +
			'<option id="' + this.id("method-dyndir") + '">' + theUILang.autodlDynamicFolder + '</option>' +
		'</select>' +
		'<div id="' + this.id("nothing") + '">' +
			'<p>' + theUILang.autodlChooseMethod + '</p>' +
		'</div>' +
		'<div id="' + this.id("watchdir") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("watchdir-folder") + '">' + theUILang.autodlTorrentClientWatchFolder + '</label></td>' +
						'<td><input type="text" class="textbox" id="' + this.id("watchdir-folder") + '" /></td>' +
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
						'<td><input type="text" class="textbox" id="' + this.id("ftp-path") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>' +
		'<div id="' + this.id("program") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("program-command") + '">' + theUILang.autodlCommand + '</label</td>' +
						'<td><input type="text" class="textbox" id="' + this.id("program-command") + '" /></td>' +
					'</tr>' +
					'<tr>' +
						'<td><label for="' + this.id("program-args") + '">' + theUILang.autodlArguments + '</label</td>' +
						'<td><input type="text" class="textbox" id="' + this.id("program-args") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>' +
		'<div id="' + this.id("dyndir") + '">' +
			'<table>' +
				'<tbody>' +
					'<tr>' +
						'<td><label for="' + this.id("dyndir-dir") + '">' + theUILang.autodlFolder + '</label</td>' +
						'<td><input type="text" class="textbox" id="' + this.id("dyndir-dir") + '" /></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>' +
		'</div>'
	);

	this.dropdown = new DropDownTabs(this.id("method"));
	this.dropdown.add(this.id("method-nothing"), this.id("nothing"), "");
	this.dropdown.add(this.id("method-watchdir"), this.id("watchdir"), "watchdir");
	this.dropdown.add(this.id("method-webui"), this.id("webui"), "webui");
	this.dropdown.add(this.id("method-ftp"), this.id("ftp"), "ftp");
	this.dropdown.add(this.id("method-program"), this.id("program"), "exec");
	this.dropdown.add(this.id("method-dyndir"), this.id("dyndir"), "dyndir");

	this.options =
	[
		new DialogOptionText(this.id("watchdir-folder"), "upload-watch-dir", ""),
		new DialogOptionText(this.id("ftp-path"), "upload-ftp-path", ""),
		new DialogOptionText(this.id("program-command"), "upload-command", ""),
		new DialogOptionText(this.id("program-args"), "upload-args", ""),
		new DialogOptionText(this.id("dyndir-dir"), "upload-dyndir", ""),
	];
}

UploadMethod.num = 0;

UploadMethod.prototype.id =
function(id)
{
	return "autodl-upload-" + id + "-" + this.num;
}

UploadMethod.prototype.initDialogBox =
function(sectionType, sectionName)
{
	_initDialogOptions(this.configFile, sectionType, sectionName, this.options);

	var section = this.configFile.getSection(sectionType, sectionName);
	var option = section.getOption("upload-type", "", "text");
	this.dropdown.select(option.getValue());
}
