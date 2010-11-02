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

function IrcServers()
{
}

IrcServers.prototype.createDialogBox =
function(multiSelectDlgBox, okHandler)
{
	theDialogManager.make("autodl-ircsrvs", theUILang.autodlIrcServers,
		'<div id="autodl-ircsrvs">' +
			'<div id="autodl-ircsrvs-left">' +
				'<div id="autodl-ircsrvs-list" />' +
				'<div id="autodl-ircsrvs-list-buttons">' +
					'<input type="button" class="Button" id="autodl-ircsrvs-new-button" value="' + theUILang.autodlNew + '" />' +
					'<input type="button" class="Button" id="autodl-ircsrvs-remove-button" value="' + theUILang.autodlRemove + '" />' +
				'</div>' +
			'</div>' +
			'<div id="autodl-ircsrvs-right">' +
				'<fieldset>' +
					'<legend>' + theUILang.autodlIrcsrvs1 + '</legend>' +
					'<div>' +
						'<label for="autodl-ircsrvs-server">' + theUILang.autodlIrcsrvs2 + '</label>' +
						'<input type="text" class="textbox" id="autodl-ircsrvs-server" title="' + theUILang.autodlIrcsrvs3 + '" emptytext="' + theUILang.autodlIrcsrvs4 + '"/>' +
						'<label for="autodl-ircsrvs-port">' + theUILang.autodlIrcsrvs5 + '</label>' +
						'<input type="text" class="textbox" id="autodl-ircsrvs-port" title="' + theUILang.autodlIrcsrvs6 + '" emptytext="' + theUILang.autodlIrcsrvs7 + '"/>' +
						'<input type="checkbox" id="autodl-ircsrvs-ssl" title="' + theUILang.autodlIrcsrvs8 + '"/>' +
						'<label for="autodl-ircsrvs-ssl" title="' + theUILang.autodlIrcsrvs9 + '">' + theUILang.autodlIrcsrvs10 + '</label>' +
					'</div>' +
					'<div>' +
						'<label for="autodl-ircsrvs-nick">' + theUILang.autodlIrcsrvs11 + '</label>' +
						'<input type="text" class="textbox" id="autodl-ircsrvs-nick" title="' + theUILang.autodlIrcsrvs12 + '"/>' +
						'<label for="autodl-ircsrvs-identpass">' + theUILang.autodlPassword + '</label>' +
						'<input type="password" class="textbox" id="autodl-ircsrvs-identpass" title="' + theUILang.autodlIrcsrvs14 + '"/>' +
						'<label for="autodl-ircsrvs-identemail">' + theUILang.autodlIrcsrvs15 + '</label>' +
						'<input type="text" class="textbox" id="autodl-ircsrvs-identemail" title="' + theUILang.autodlIrcsrvs16 + '"/>' +
					'</div>' +
				'</fieldset>' +
				'<fieldset>' +
					'<legend>' + theUILang.autodlIrcsrvs17 + '</legend>' +
					'<div>' +
						'<select>' +
							'<option>#channel1</option>' +
							'<option>#channel2</option>' +
							'<option>#channel3</option>' +
						'</select>' +
						'<input type="button" class="Button" id="autodl-ircsrvs-new-channel-button" value="' + theUILang.autodlNew + '" />' +
						'<input type="button" class="Button" id="autodl-ircsrvs-remove-channel-button" value="' + theUILang.autodlRemove + '" />' +
					'</div>' +
					'<div>' +
						'<label for="autodl-ircsrvs-channel">' + theUILang.autodlIrcsrvs18 + '</label>' +
						'<input type="text" class="textbox" id="autodl-ircsrvs-channel" title="' + theUILang.autodlIrcsrvs19 + '" emptytext="' + theUILang.autodlIrcsrvs20 + '"/>' +
						'<label for="autodl-ircsrvs-channelpass">' + theUILang.autodlPassword + '</label>' +
						'<input type="password" class="textbox" id="autodl-ircsrvs-channelpass" title="' + theUILang.autodlIrcsrvs22 + '"/>' +
					'</div>' +
					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td><label for="autodl-ircsrvs-chaninvite">' + theUILang.autodlIrcsrvs23 + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ircsrvs-chaninvite" title="' + theUILang.autodlIrcsrvs24 + '" emptytext="' + theUILang.autodlIrcsrvs25 + '"/></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-ircsrvs-httpurl">' + theUILang.autodlIrcsrvs26 + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ircsrvs-httpurl" title="' + theUILang.autodlIrcsrvs27 + '"/></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-ircsrvs-httpheader">' + theUILang.autodlIrcsrvs28 + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ircsrvs-httpheader" title="' + theUILang.autodlIrcsrvs29 + '"/></td>' +
							'</tr>' +
							'<tr>' +
								'<td><label for="autodl-ircsrvs-httpdata">' + theUILang.autodlIrcsrvs30 + '</label></td>' +
								'<td><input type="text" class="textbox" id="autodl-ircsrvs-httpdata" title="' + theUILang.autodlIrcsrvs31 + '"/></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +
				'</fieldset>' +
			'</div>' +
			'<div class="aright buttons-list dlgbuttons">' +
				'<input type="button" id="autodl-ircsrvs-ok-button" value="' + theUILang.ok + '" class="OK Button" />' +
				'<input type="button" value="' + theUILang.Cancel + '" class="Cancel Button" />' +
			'</div>' +
		'</div>'
	);

	var this_ = this;

	$("#autodl-ircsrvs-ok-button").click(function(e) { okHandler() });





	// Do this last so all textboxes have been created
	installEmptyTextHandlers("autodl-ircsrvs");
}

IrcServers.prototype.onBeforeShow =
function(configFile, trackerInfos, trackersId)
{
}

IrcServers.prototype.onAfterHide =
function()
{
}

IrcServers.prototype.onOkClicked =
function()
{
}
