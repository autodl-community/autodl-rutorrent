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

plugin.loadJavaScriptFiles =
function(aryFiles, func)
{
	var numFiles = aryFiles.length;
	if (!numFiles)
		return func();
	for (var i = 0; i < aryFiles.length; i++)
	{
		injectScript(this.path + aryFiles[i], function()
		{
			if (--numFiles === 0)
				func();
		});
	}
}

// Initialize the plugin (load CSS and JS files). Continues in onLangLoaded()
plugin.__init =
function()
{
	var this_ = this;
	this.loadMainCSS();
	this.loadJavaScriptFiles(
	[
		'Tabs.js',
		'DialogUtils.js',
		'UploadMethod.js',
		'Preferences.js',
		'Filters.js',
		'AutodlFilesDownloader.js',
		'ConfigFileParser.js',
		'MyDialogManager.js',
	], function()
	{
		this_.loadLang(true);
	});
}

// Called when all of our files have been loaded
plugin.onLangLoaded =
function()
{
	this.__init2();
}

// All files have been loaded. Now initialize the rest.
plugin.__init2 =
function()
{
	try
	{
		var this_ = this;
		this.dialogManager = new MyDialogManager(this.path);

		// Add our button to the left of the About button
		$("#mnu_help").before($(
			'<a id="mnu_autodl" title="autodl-irssi" onfocus="this.blur()" href="javascript:void(0)">' +
				'<div id="autodl">autodl</div>' +
			'</a>' +
			'<a id="mnu_autodl2" title="autodl-irssi" onfocus="this.blur()" href="javascript:void(0)">' +
				'<div id="autodl2">filters</div>' +
			'</a>' +
			'<div class="TB_Separator" />'
		));
		$("#mnu_autodl").click(function(e)
		{
			this_.dialogManager.toggleDialog("preferences");
		});
		$("#mnu_autodl2").click(function(e)
		{
			this_.dialogManager.toggleDialog("filters");
		});
	}
	catch (ex)
	{
		log("autodl-irssi: __init2: ex: " + ex);
		throw ex;
	}
}

if (plugin.enabled)
	plugin.__init();
