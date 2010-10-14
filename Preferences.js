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

function Preferences()
{
	theDialogManager.make("autodl-preferences", theUILang.autodlPreferences,
		'<div id="autodl-prefs">' +
			'<div id="autodl-prefs-tabs">' +
				'<ul class="tabs-header">' +
					'<li><a id="autodl-prefs-tab-general">' + theUILang.autodlGeneral + '</a></li>' +
					'<li><a id="autodl-prefs-tab-upload">' + theUILang.autodlUploadMethod + '</a></li>' +
					'<li><a id="autodl-prefs-tab-webui">' + theUILang.autodlWebui + '</a></li>' +
					'<li><a id="autodl-prefs-tab-ftp">' + theUILang.autodlFtp + '</a></li>' +
					'<li><a id="autodl-prefs-tab-programs">' + theUILang.autodlPrograms + '</a></li>' +
					'<li><a id="autodl-prefs-tab-advanced">' + theUILang.autodlAdvanced + '</a></li>' +
				'</ul>' +
			'</div>' +
			'<div id="autodl-prefs-contents">' +
				'<div id="autodl-prefs-contents-general">' +
					'<div>' +
						'<td><label for="autodl-max-saved-releases">' + theUILang.autodlMaxSavedRels + '</label></td>' +
						'<td><input type="text" class="textbox" id="autodl-max-saved-releases" /></td>' +
					'</div>' +
					'<div>' +
						'<td>' +
							'<input type="checkbox" id="autodl-save-download-history" />' +
							'<label for="autodl-save-download-history">' + theUILang.autodlSaveDlHist + '</label>' +
						'</td>' +
					'</div>' +
					'<div>' +
						'<td>' +
							'<input type="checkbox" id="autodl-download-duplicates" />' +
							'<label for="autodl-download-duplicates">' + theUILang.autodlDownloadDupes + '</label>' +
						'</td>' +
					'</div>' +
					'<div>' +
						'<td>' +
							'<label for="autodl-automatic-updates">' + theUILang.autodlAutomaticUpdates + '</label>' +
							'<select id="autodl-automatic-updates">' +
								'<option>' + theUILang.autodlUpdateAutomatically + '</option>' +
								'<option>' + theUILang.autodlAsk + '</option>' +
								'<option>' + theUILang.autodlDontCheckForUpdates + '</option>' +
							'</select>' +
						'</td>' +
					'</div>' +
				'</div>' +
				'<div id="autodl-prefs-contents-upload"/>' +
				'<div id="autodl-prefs-contents-webui">' +
					'<p>' + theUILang.autodlOnlyUtorrentWebui2 + '</p>' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-webui-user">' + theUILang.autodlUserName + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-webui-user" /></td>' +
								'<td><label for="autodl-webui-password">' + theUILang.autodlPassword + '</label></td>' +
								'<td><input type="password" id="autodl-webui-password" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-webui-hostname">' + theUILang.autodlIpAddress + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-webui-hostname" /></td>' +
								'<td><label for="autodl-webui-port">' + theUILang.autodlPort + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-webui-port" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
					'<input type="checkbox" id="autodl-webui-ssl" />' +
					'<label for="autodl-webui-ssl">' + theUILang.autodlUseSsl + '</label>' +
				'</div>' +
				'<div id="autodl-prefs-contents-ftp">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-ftp-user">' + theUILang.autodlUserName + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ftp-user" /></td>' +
								'<td><label for="autodl-ftp-password">' + theUILang.autodlPassword + '</label></td>' +
								'<td><input type="password" id="autodl-ftp-password" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-ftp-hostname">' + theUILang.autodlHostname + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ftp-hostname" /></td>' +
								'<td><label for="autodl-ftp-port">' + theUILang.autodlPort + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ftp-port" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-programs">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-programs-utorrent">' + theUILang.autodlUtorrentExe + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-programs-utorrent" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-advanced">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-advanced-user-agent">' + theUILang.autodlDownloadUserAgent + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-advanced-user-agent" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-tracker-user-agent">' + theUILang.autodlTrackerUserAgent + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-advanced-tracker-user-agent" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-peer-id">' + theUILang.autodlTrackerPeerId + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-advanced-peer-id" maxlength="20" /></td>' +
								'<td><label for="autodl-advanced-peer-id">' + theUILang.autodl20Chars + '</label></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-max-download-retry-time">' + theUILang.autodlMaxDlRetryTime + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-advanced-max-download-retry-time" /></td>' +
								'<td><label for="autodl-advanced-max-download-retry-time">' + theUILang.autodlSeconds + '</label></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-output-level">' + theUILang.autodlDebugOutputLevel + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-advanced-output-level" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
					'<input type="checkbox" id="autodl-advanced-debug" />' +
					'<label for="autodl-advanced-debug">' + theUILang.autodlDebug + '</label>' +
				'</div>' +
			'</div>' +
			'<div class="aright buttons-list dlgbuttons">' +
				'<input type="button" value="' + theUILang.ok + '" class="OK Button" />' +
				'<input type="button" value="' + theUILang.Cancel + '" class="Cancel Button" />' +
			'</div>' +
		'</div>'
	);

	this.tabs = new Tabs();
	this.tabs.add("autodl-prefs-tab-general", "autodl-prefs-contents-general");
	this.tabs.add("autodl-prefs-tab-upload", "autodl-prefs-contents-upload");
	this.tabs.add("autodl-prefs-tab-webui", "autodl-prefs-contents-webui");
	this.tabs.add("autodl-prefs-tab-ftp", "autodl-prefs-contents-ftp");
	this.tabs.add("autodl-prefs-tab-programs", "autodl-prefs-contents-programs");
	this.tabs.add("autodl-prefs-tab-advanced", "autodl-prefs-contents-advanced");

	this.dropDownBox = new DropDownBox("autodl-automatic-updates");
	this.dropDownBox.add("auto");
	this.dropDownBox.add("ask");
	this.dropDownBox.add("disabled");

	this.uploadMethod = new UploadMethod("autodl-prefs-contents-upload", true);
}

Preferences.prototype.options =
[
	new DialogOptionInt("autodl-max-saved-releases", "max-saved-releases", "1000"),
	new DialogOptionBool("autodl-save-download-history", "save-download-history", "true"),
	new DialogOptionBool("autodl-download-duplicates", "download-duplicates", "false"),
	new DialogOptionText("autodl-programs-utorrent", "path-utorrent", ""),
	new DialogOptionText("autodl-advanced-user-agent", "user-agent", "autodl-irssi"),
	new DialogOptionText("autodl-advanced-tracker-user-agent", "user-agent-tracker", ""),
	new DialogOptionText("autodl-advanced-peer-id", "peer-id", ""),
	new DialogOptionInt("autodl-advanced-max-download-retry-time", "download-retry-time-seconds", "300"),
	new DialogOptionInt("autodl-advanced-output-level", "output-level", "3"),
	new DialogOptionBool("autodl-advanced-debug", "debug", "false"),
];

Preferences.prototype.webui =
[
	new DialogOptionText("autodl-webui-user", "user", ""),
	new DialogOptionText("autodl-webui-password", "password", ""),
	new DialogOptionText("autodl-webui-hostname", "hostname", ""),
	new DialogOptionInt("autodl-webui-port", "port", "0"),
	new DialogOptionBool("autodl-webui-ssl", "ssl", "false"),
];

Preferences.prototype.ftp =
[
	new DialogOptionText("autodl-ftp-user", "user", ""),
	new DialogOptionText("autodl-ftp-password", "password", ""),
	new DialogOptionText("autodl-ftp-hostname", "hostname", ""),
	new DialogOptionInt("autodl-ftp-port", "port", "0"),
];

Preferences.prototype.onBeforeShow =
function(configFile)
{
	this.uploadMethod.initFields(configFile.getSection("options", null));
	initDialogOptions(configFile.getSection("options", null), this.options);
	initDialogOptions(configFile.getSection("webui", null), this.webui);
	initDialogOptions(configFile.getSection("ftp", null), this.ftp);

	var section = configFile.getSection("options", null);
	var option = section.getOption("update-check", "ask", "text");
	this.dropDownBox.select(option.getValue());
}

Preferences.prototype.onAfterHide =
function()
{
}
