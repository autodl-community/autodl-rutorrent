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

function convertStringToBoolean(s)
{
	s = s.toLowerCase();
	return !(s === "false" || s === "off" || s === "no" || s === "0");
}

function convertStringToNumber(valueStr, defaultValue, minValue, maxValue)
{
	var value = parseFloat(valueStr);
	if (isNaN(value))
		value = defaultValue;
	if (value === undefined)
		return value;
	if (minValue !== undefined && value < minValue)
		value = minValue;
	if (maxValue !== undefined && value > maxValue)
		value = maxValue;
	return value;
}

function convertStringToInteger(valueStr, defaultValue, minValue, maxValue)
{
	return Math.floor(convertStringToNumber(valueStr, defaultValue, minValue, maxValue));
}

function DialogOptionBool(id, name, defaultValue)
{
	this.type = "bool";
	this.id = id;
	this.name = name;
	this.defaultValue = defaultValue;
}

function DialogOptionInt(id, name, defaultValue)
{
	this.type = "int";
	this.id = id;
	this.name = name;
	this.defaultValue = defaultValue;
}

function DialogOptionText(id, name, defaultValue)
{
	this.type = "text";
	this.id = id;
	this.name = name;
	this.defaultValue = defaultValue;
}

function getSectionOptionValue(section, name, defaultValue, type)
{
	if (!section)
		return defaultValue;
	return section.getOption(name, defaultValue, type).getValue();
}

function enableJqueryElem(jq, enable)
{
	if (enable)
		jq.attr("disabled", "disabled");
	else
		jq.removeAttr("disabled");
}

function initDialogOptions(section, aryDlgOptions)
{
	for (var i = 0; i < aryDlgOptions.length; i++)
	{
		var dlgOption = aryDlgOptions[i];
		var val = getSectionOptionValue(section, dlgOption.name, dlgOption.defaultValue, dlgOption.type);
		if (dlgOption.type === "bool")
		{
			if (val)
				$("#" + dlgOption.id).attr("checked", "checked");
			else
				$("#" + dlgOption.id).removeAttr("checked");
		}
		else
			$("#" + dlgOption.id).val(val);
	}
}

function DropDownBox(id)
{
	this.id = id;
	this.options = [];
}

DropDownBox.prototype.add =
function(value)
{
	this.options.push(value);
}

DropDownBox.prototype.select =
function(value)
{
	for (var i = 0; i < this.options.length; i++)
	{
		if (this.options[i] === value)
		{
			$("#" + this.id).attr("selectedIndex", i);
			return;
		}
	}

	log("DropDownBox: Could not find value " + value);
}
