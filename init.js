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

	// Note: These files aren't necessarily loaded in order! They must not rely on other JS files.
	this.loadJavaScriptFiles(
	[
		'EmptyText.js',
		'ListBox.js',
		'Tabs.js',
		'DialogUtils.js',
		'MultiSelect.js',
		'UploadMethod.js',
		'Preferences.js',
		'Filters.js',
		'Trackers.js',
		'Servers.js',
		'AutodlFilesDownloader.js',
		'ConfigFileParser.js',
		'TrackerInfo.js',
		'MyDialogManager.js'
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
		this._addToToolbar();
	}
	catch (ex)
	{
		log("autodl-irssi: __init2: ex: " + ex);
		throw ex;
	}
}

plugin._addToToolbar =
function()
{
	this.addButtonToToolbar("autodl-tb", "autodl-irssi", "", "help");
	this.addSeparatorToToolbar("help");

	var this_ = this;
	$("#mnu_autodl-tb").click(function(e)
	{
		this_._onClickToolbarButton(e);
	}).
	mouseup(function(e)
	{
		// Prevent ruTorrent from closing the popup menu
		e.stopPropagation();
	});
}

plugin._onClickToolbarButton =
function(e)
{
	var this_ = this;

	theContextMenu.clear();
	theContextMenu.add(["Filters...", function() { this_.dialogManager.toggleDialog("filters"); }]);
	theContextMenu.add(["Announce Channels...", function() { this_.dialogManager.toggleDialog("servers"); }]);
	theContextMenu.add(["Trackers...", function() { this_.dialogManager.toggleDialog("trackers"); }]);
	theContextMenu.add(["Preferences...", function() { this_.dialogManager.toggleDialog("preferences"); }]);
	theContextMenu.add([CMENU_SEP]);
	theContextMenu.add(["Help", function() {}]);

	// There's no way to add href links so add this fugly hack
	$($("a", theContextMenu.obj)[4]).attr("target", "_blank").attr("href", "http://sourceforge.net/apps/phpbb/autodl-irssi/")

	var offset = $("#autodl-tb").offset();
	var x = offset.left - 5;
	var y = offset.top + 5 + $("#autodl-tb").height();
	theContextMenu.show(x, y);
}

if (plugin.enabled)
	plugin.__init();
