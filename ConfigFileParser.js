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

// Parses the autodl.cfg file

function sortObjectById(obj)
{
	var ary = [];
	for (var key in obj)
		ary.push(obj[key]);

	// Output in the same order we read it from the file
	ary.sort(function(a, b)
	{
		if (a.id < b.id)
			return -1;
		if (a.id > b.id)
			return 1;
		return 0;
	});

	return ary;
}

function ConfigOption(id, name, value)
{
	this.type = "option";
	this.id = id;
	this.name = $.trim(name);
	this.value = $.trim(value);
}

ConfigOption.prototype._toString =
function()
{
	if (this.defaultValue != null && this.defaultValue === this.value)
		return null;
	return this.name + " = " + this.value;
}

function ConfigComment(id, name, line)
{
	this.type = "comment";
	this.id = id;
	this.name = name;
	this.value = line;
}

ConfigComment.prototype._toString =
function()
{
	return this.value;
}

/**
 * @param id	Unique id
 * @param type	The section type, i.e., first part of [type name]
 * @param name	The section name (optional)
 */
function ConfigSection(id, type, name)
{
	this.id = id;
	this.type = $.trim(type);
	this.name = $.trim(name);
	this.nextId = 0;
	this.lines = {};
}

ConfigSection.prototype.addOption =
function(name, value)
{
	var option = new ConfigOption(this.nextId++, name, value);
	this.lines[option.name] = option;
}

ConfigSection.prototype.addComment =
function(line)
{
	var id = this.nextId++;
	var name = " comment " + id;
	var comment = new ConfigComment(id, name, line);
	this.lines[comment.name] = comment;
}

ConfigSection.prototype.toString =
function()
{
	var out = "";

	out += "[" + this.type;
	if (this.name)
		out += " " + this.name;
	out += "]\n";

	var ary = sortObjectById(this.lines);
	for (var i = 0; i < ary.length; i++)
	{
		var s = ary[i]._toString();
		if (s != null)
			out += s + "\n";
	}

	return out;
}

function ConfigFile()
{
	this.sections = {};
	this.id = 0;
}

ConfigFile.prototype.parse =
function(contents)
{
	this.sections = {};
	var section, sectionLine, ary;

	function error(msg)
	{
		log("autodl.cfg: line " + (i+1) + ": " + msg);
	}

	var lines = contents.split("\n");
	for (var i = 0; i < lines.length; i++)
	{
		var line = $.trim(lines[i]);
		if (line === "")
			continue;

		if (line[0] === "#")
		{
			if (section)
				section.addComment(line);
		}
		else if (ary = line.match(/^\[\s*([\w\-]+)\s*(?:([^\]]+))?\s*]$/))
		{
			var type = $.trim(ary[1]).toLowerCase();
			var name = $.trim(ary[2]);

			section = this.sections[type + " " + name];
			if (!section)
				this.sections[type + " " + name] = section = new ConfigSection(this.id++, type, name);
		}
		else if (ary = line.match(/^([\w\-]+)\s*=(.*)$/))
		{
			if (!section)
				error("Missing a [section]");
			else
			{
				var option = $.trim(ary[1]).toLowerCase();
				var value = $.trim(ary[2]);
				section.addOption(option, value);
			}
		}
		else
		{
			error("Ignoring line");
		}
	}
}

ConfigFile.prototype.toString =
function()
{
	var out = "";

	var ary = sortObjectById(this.sections);
	for (var i = 0; i < ary.length; i++)
	{
		var section = ary[i];
		if (out !== "")
			out += "\n";
		out += section.toString();
	}

	return out;
}
