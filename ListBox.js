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

function ListBox(idParent)
{
	this.lbElem = document.getElementById(idParent);
	$(this.lbElem).addClass("listbox");
	this.rows = [];
	this.selectedIndex = -1;
}

ListBox.prototype.removeAll =
function()
{
	this.rows = [];
	this.selectedIndex = -1;
	$(this.lbElem).empty();
}

ListBox.prototype.append =
function(elem, data)
{
	var obj =
	{
		elem: $('<div class="listboxItem" />').append(elem)[0],
		data: data,
	};
	this.rows.push(obj);
	$(this.lbElem).append(obj.elem);

	var this_ = this;
	$(obj.elem).click(function(e)
	{
		this_.simulateSelect(this_._findIndex(obj));
	});
}

ListBox.prototype._findIndex =
function(obj)
{
	for (var i = 0; i < this.rows.length; i++)
	{
		if (this.rows[i] === obj)
			return i;
	}

	return null;
}

ListBox.prototype.simulateSelect =
function(index)
{
	this._newSelected(index);
}

ListBox.prototype._getData =
function(index)
{
	var obj = this.rows[index];
	if (obj)
		return obj.data;
	return;
}

ListBox.prototype._newSelected =
function(index)
{
	if (this.selectedIndex === index)
		return;

	var oldIndex = this.selectedIndex;
	this._makeUnselected(oldIndex);
	this._makeSelected(index);
	this.selectedIndex = index;
	if (this.onSelected)
		this.onSelected(this._getData(oldIndex), this._getData(index));
}

ListBox.prototype._makeUnselected =
function(index)
{
	var obj = this.rows[index];
	if (!obj)
		return;
	$(obj.elem).removeClass("listboxItemSelected");
}

ListBox.prototype._makeSelected =
function(index)
{
	var obj = this.rows[index];
	if (!obj)
		return;
	$(obj.elem).addClass("listboxItemSelected");
}
