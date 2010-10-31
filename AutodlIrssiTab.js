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

// Code for the autodl-irssi tab

function AutodlIrssiTab(plugin)
{
	this.gettingLines = false;
	this.pluginUrl = plugin.path;

	plugin.attachPageToTabs($(
		'<div id="autodl-irssi-tab">' +
			'<div id="autodl-log-buttons">' +
				'<input type="button" id="autodl-log-clear-button" class="Button" value="' + theUILang.ClearButton + '" />' +
			'</div>' +
			'<div id="autodl-irssi-log" class="autodl-fg-default autodl-bg-default">' +
				'<table>' +
					'<tbody id="autodl-log-tbody"/>' +
				'</table>' +
			'</div>' +
		'</div>'
	).get(0), "autodl-irssi", "lcont");

	this._initResizeBottom();
	this._initOnShow();

	var this_ = this;

	$("#autodl-log-clear-button").click(function(e) {
		$("#autodl-log-tbody").empty();
	});

	setInterval(function() { this_._getNewLines() }, this.CHECK_NEW_LINES_EVERY_SECS * 1000);
	this._getNewLines();
}

// Max number of visible lines
AutodlIrssiTab.prototype.MAX_AUTODL_IRSSI_LINES = 200;

// Start removing lines when it reaches this limit
AutodlIrssiTab.prototype.REMOVE_LINES_LIMIT = AutodlIrssiTab.prototype.MAX_AUTODL_IRSSI_LINES + 10;

// How often we'll get new autodl-irssi output lines from the server
AutodlIrssiTab.prototype.CHECK_NEW_LINES_EVERY_SECS = 1;

AutodlIrssiTab.prototype._initResizeBottom =
function()
{
	var this_ = this;

	this.oldResizeBottom = theWebUI.resizeBottom;
	theWebUI.resizeBottom = function(width, height)
	{
		this_._onResizeBottom(width, height);
	};

	this._onResize();
}

AutodlIrssiTab.prototype._initOnShow =
function()
{
	var this_ = this;

	this.oldOnShow = theTabs.onShow;
	theTabs.onShow = function(id)
	{
		this_.onShow(id);
	};
}

AutodlIrssiTab.prototype._logError =
function(msg)
{
	var currentTime = new Date();
	if (this.timeLastError != null && currentTime - this.timeLastError < 30*1000)
		return;
	this.timeLastError = currentTime;
	this._log(msg);
}

AutodlIrssiTab.prototype._log =
function(msg)
{
	log("autodl-irssi: " + msg);
}

AutodlIrssiTab.prototype._getNewLines =
function()
{
	if (this.gettingLines)
		return;

	try
	{
		var this_ = this;
		this.gettingLines = true;
		autodl_ajax(
		{
			url: this.pluginUrl + "getlines.php?cid=" + (this.cid != null ? this.cid : ""),
			type: "GET",
			dataType: "json",
			success: function(data, status) { this_._onGetLines(data); },
			error: function(xhr, status, ex)
			{
				this_.gettingLines = false;
				this.errorGettingLines = true;
				this_._logError("Could not get lines");
			}
		});
	}
	catch (ex)
	{
		this.gettingLines = false;
		this._notifyHandler("AutodlIrssiTab._getNewLines: ex: " + ex);
	}
}

AutodlIrssiTab.prototype._onGetLines =
function(data)
{
	try
	{
		this.gettingLines = false;
		if (data.error)
		{
			this.errorGettingLines = true;
			return this._logError("Error getting new lines: " + data.error);
		}
		if (this.errorGettingLines)
		{
			this.errorGettingLines = false;
			this._log("getlines is now working.");
		}

		this.cid = data.cid;
		var lines = data.lines;
		for (var i = 0; i < lines.length; i++)
		{
			var info = lines[i];
			this.addLine(new Date(info.time * 1000), info.line);
		}
	}
	catch (ex)
	{
		this._notifyHandler("AutodlIrssiTab::_onGetLines: ex: " + ex);
	}
}

AutodlIrssiTab.prototype._onResizeBottom =
function(width, height)
{
	this.oldResizeBottom.call(theWebUI, width, height);
	this._onResize();
}

AutodlIrssiTab.prototype.onShow =
function(id)
{
	if (id !== "autodl-irssi-tab")
		return this.oldOnShow(id);

	// Resize since height() won't work on our button div when it's hidden.
	this._onResize();
}

AutodlIrssiTab.prototype._onResize =
function()
{
	function fromPixels(s)
	{
		var ary = s.match(/^(\d+)px$/);
		if (!ary)
			return null;
		return parseInt(ary[1], 10);
	}

	var width = fromPixels($("#PluginList").css("width"));
	var height = fromPixels($("#PluginList").css("height"));

	var logElem = $("#autodl-irssi-log");
	if (width != null)
		logElem.width(width);
	if (height != null)
	{
		height -= $("#autodl-log-buttons").height();
		logElem.height(height);
	}
}

function getMircColorInfo(s)
{
	var rv = [];

	var attrs =
	{
		bold: false,
		underline: false,
		fg: -1,
		bg: -2,
		s: ""
	};
	var oldAttrs = {};

	function attrsChanged(attrs1, attrs2)
	{
		return attrs1.bold !== attrs2.bold ||
			   attrs1.underline !== attrs2.underline ||
			   attrs1.fg !== attrs2.fg ||
			   attrs1.bg !== attrs2.bg;
	}

	for (var i = 0; i < s.length; i++)
	{
		$.extend(oldAttrs, attrs);
		var code = s.charCodeAt(i);
		if (code >= 0x20)
		{
			attrs.s += s.charAt(i);
		}
		else if (code === 2)
		{
			// Bold text
			attrs.bold = !attrs.bold;
		}
		else if (code === 3)
		{
			// Change fg/bg: \x03, \x03FF?, \x03FF?,BB?

			var s2 = s.substr(i+1);
			var ary = s2.match(/^(?:(\d\d?)(?:,(\d\d?))?)?/);
			attrs.fg = -1;
			attrs.bg = -2;
			if (ary[1] != null)
			{
				attrs.fg = parseInt(ary[1], 10) % 16;
				i += ary[1].length;
				if (ary[2] != null)
				{
					attrs.bg = parseInt(ary[2], 10) % 16;
					i += 1 + ary[2].length;	// Don't forget the comma
				}
			}
		}
		else if (code === 15)
		{
			// Revert back to normal text
			attrs.bold = false;
			attrs.underline = false;
			attrs.fg = -1;
			attrs.bg = -2;
		}
		else if (code === 22)
		{
			// Reverse
			var tmp = attrs.fg;
			attrs.fg = attrs.bg;
			attrs.bg = tmp;
		}
		else if (code === 31)
		{
			// Underline
			attrs.underline = !attrs.underline;
		}
		else
		{
			attrs.s += s.charAt(i);
		}

		if (attrsChanged(oldAttrs, attrs))
		{
			if (attrs.s !== "")
				rv.push($.extend({}, oldAttrs));
			attrs.s = "";
		}
	}
	if (attrs.s !== "")
		rv.push($.extend({}, attrs));

	return rv;
}

AutodlIrssiTab.prototype._getTimeString =
function(time)
{
	function f2(v)
	{
		return ("0" + v).substr(-2);
	}

	return f2(time.getHours()) + ":" + f2(time.getMinutes()) + ":" + f2(time.getSeconds());
}

AutodlIrssiTab.prototype.addLine =
function(time, line)
{
	var lineElem = $('<div class="autodl-line"/>');
	var infos = getMircColorInfo(line);
	for (var i = 0; i < infos.length; i++)
	{
		var info = infos[i];

		var lines = info.s.split("\n");
		for (var j = 0; j < lines.length; j++)
		{
			if (j !== 0)
				lineElem.append($("<br/>"));

			var elem = $('<span/>').text(lines[j]);
			lineElem.append(elem);
			if (info.bold)
				elem.addClass("autodl-bold");
			if (info.underline)
				elem.addClass("autodl-underline");

			if (info.fg === -1)
				;	// Nothing, inherit from parent
			else if (info.fg === -2)
				elem.addClass("autodl-bg-as-fg");
			else
				elem.addClass("autodl-fg-" + info.fg);

			if (info.bg === -2)
				;	// Nothing, inherit from parent
			else if (info.bg === -1)
				elem.addClass("autodl-fg-as-bg");
			else
				elem.addClass("autodl-bg-" + info.bg);
		}
	}

	var tr = $('<tr/>').attr("title", time.toLocaleString())
			.append($('<td class="autodl-line-time"/>').text(this._getTimeString(time)))
			.append($('<td class="autodl-line-sep"/>').text("-!-"))
			.append($('<td class="autodl-line-text"/>').append(lineElem));

	var tbody = $("#autodl-log-tbody");
	tbody.append(tr);

	if (tbody.children().size() >= this.REMOVE_LINES_LIMIT)
		tbody.children(":lt(" + (tbody.children().size() - this.MAX_AUTODL_IRSSI_LINES) + ")").remove();
}
