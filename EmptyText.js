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

// Use myval() instead of val() to get/set textbox value
$.fn.myval = function(value)
{
	var elem = this[0];

	if (value == null)
	{
		// get value
		if ($(elem).hasClass("emptytext-set"))
			return "";
		return $(elem).val();
	}
	else
	{
		// set value
		$(elem).removeClass("emptytext-set").val(value);
		_textboxSetEmptyText(elem);
	}
};

function _textboxSetEmptyText(elem)
{
	if ($(elem).val() != "")
		return;
	var newText = $(elem).attr("emptytext");
	if (newText == null)
		return;
	$(elem).val(newText).addClass("emptytext-set");
}

// Call this function after creating all textboxes
function installEmptyTextHandlers(baseId)
{
	$(":text", $("#" + baseId)).each(function()
	{
		$(this).blur(function(e)
		{
			_textboxSetEmptyText(this);
		});
		$(this).focus(function(e)
		{
			if ($(this).hasClass("emptytext-set"))
				$(this).val("").removeClass("emptytext-set");
		});
	});
}
