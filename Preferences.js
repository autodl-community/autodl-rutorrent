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
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-max-saved-releases">' + theUILang.autodlMaxSavedRels + '</label></td>' +
								'<td><input type="text" id="autodl-max-saved-releases" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td>' +
									'<input type="checkbox" id="autodl-save-download-history" />' +
									'<label for="autodl-save-download-history">' + theUILang.autodlSaveDlHist + '</label>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td>' +
									'<input type="checkbox" id="autodl-download-duplicates" />' +
									'<label for="autodl-download-duplicates">' + theUILang.autodlDownloadDupes + '</label>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td>' +
									'<label for="autodl-automatic-updates">' + theUILang.autodlAutomaticUpdates + '</label>' +
									'<select id="autodl-automatic-updates">' +
										'<option>' + theUILang.autodlUpdateAutomatically + '</option>' +
										'<option>' + theUILang.autodlAsk + '</option>' +
										'<option>' + theUILang.autodlDontCheckForUpdates + '</option>' +
									'</select>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-upload">' +
					'<label for="autodl-upload-method">' + theUILang.autodlChooseUploadMethod + '</label>' +
					'<select id="autodl-upload-method">' +
						'<option>' + theUILang.autodlSaveToWatchFolder + '</option>' +
						'<option>' + theUILang.autodlUtorrentWebui + '</option>' +
						'<option>' + theUILang.autodlFtpUpoad + '</option>' +
						'<option>' + theUILang.autodlRunProgram + '</option>' +
						'<option>' + theUILang.autodlDynamicFolder + '</option>' +
					'</select>' +
					'<div id="autodl-upload-watchdir">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-upload-watchdir-folder">' + theUILang.autodlTorrentClientWatchFolder + '</label></td>' +
									'<td><input type="text" id="autodl-upload-watchdir-folder" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-upload-webui">' +
						'<p>' + theUILang.autodlOnlyUtorrentWebui + '</p>' +
						'<p>' + theUILang.autodlSettingsInPrefsWebui + '</p>' +
					'</div>' +
					'<div id="autodl-upload-ftp">' +
						'<table>' +
							'<tbody>' +
								'<p>' + theUILang.autodlSettingsInPrefsFtp + '</p>' +
								'<tr>' +
									'<td><label for="autodl-upload-ftp-path">' + theUILang.autodlFtpPath + '</label</td>' +
									'<td><input type="text" id="autodl-upload-ftp-path" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-upload-program">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-upload-program-command">' + theUILang.autodlCommand + '</label</td>' +
									'<td><input type="text" id="autodl-upload-program-command" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-upload-program-args">' + theUILang.autodlArguments + '</label</td>' +
									'<td><input type="text" id="autodl-upload-program-args" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-upload-dyndir">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-upload-dyndir-dir">' + theUILang.autodlFolder + '</label</td>' +
									'<td><input type="text" id="autodl-upload-dyndir-dir" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
				'</div>' +
				'<div id="autodl-prefs-contents-webui">' +
					'<table>' +
						'<tbody>' +
							'<p>' + theUILang.autodlOnlyUtorrentWebui2 + '</p>' +
							'<tr>' +
								'<td><label for="autodl-webui-user">' + theUILang.autodlUserName + '</label></td>' +
								'<td><input type="text" id="autodl-webui-user" /></td>' +
								'<td><label for="autodl-webui-password">' + theUILang.autodlPassword + '</label></td>' +
								'<td><input type="password" id="autodl-webui-password" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-webui-hostname">' + theUILang.autodlIpAddress + '</label></td>' +
								'<td><input type="text" id="autodl-webui-hostname" /></td>' +
								'<td><label for="autodl-webui-port">' + theUILang.autodlPort + '</label></td>' +
								'<td><input type="text" id="autodl-webui-port" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td>' +
									'<input type="checkbox" id="autodl-webui-ssl" />' +
									'<label for="autodl-webui-ssl">' + theUILang.autodlUseSsl + '</label>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-ftp">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-ftp-user">' + theUILang.autodlUserName + '</label></td>' +
								'<td><input type="text" id="autodl-ftp-user" /></td>' +
								'<td><label for="autodl-ftp-password">' + theUILang.autodlPassword + '</label></td>' +
								'<td><input type="password" id="autodl-ftp-password" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-ftp-hostname">' + theUILang.autodlHostname + '</label></td>' +
								'<td><input type="text" id="autodl-ftp-hostname" /></td>' +
								'<td><label for="autodl-ftp-port">' + theUILang.autodlPort + '</label></td>' +
								'<td><input type="text" id="autodl-ftp-port" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-programs">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-programs-utorrent">' + theUILang.autodlUtorrentExe + '</label></td>' +
								'<td><input type="text" id="autodl-programs-utorrent" /></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
				'<div id="autodl-prefs-contents-advanced">' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-advanced-user-agent">' + theUILang.autodlDownloadUserAgent + '</label></td>' +
								'<td><input type="text" id="autodl-advanced-user-agent" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-tracker-user-agent">' + theUILang.autodlTrackerUserAgent + '</label></td>' +
								'<td><input type="text" id="autodl-advanced-tracker-user-agent" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-peer-id">' + theUILang.autodlTrackerPeerId + '</label></td>' +
								'<td><input type="text" id="autodl-advanced-peer-id" maxlength="20" /></td>' +
								'<td><label for="autodl-advanced-peer-id">' + theUILang.autodl20Chars + '</label></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-max-download-retry-time">' + theUILang.autodlMaxDlRetryTime + '</label></td>' +
								'<td><input type="text" id="autodl-advanced-max-download-retry-time" /></td>' +
								'<td><label for="autodl-advanced-max-download-retry-time">' + theUILang.autodlSeconds + '</label></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-advanced-output-level">' + theUILang.autodlDebugOutputLevel + '</label></td>' +
								'<td><input type="text" id="autodl-advanced-output-level" /></td>' +
							'</tr>' +
							'<tr>' +
								'<td>' +
									'<input type="checkbox" id="autodl-advanced-debug" />' +
									'<label for="autodl-advanced-debug">' + theUILang.autodlDebug + '</label>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</div>' +
			'</div>' +
			'<div class="aright buttons-list">' +
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
}
