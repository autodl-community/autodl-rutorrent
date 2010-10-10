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

function Tabs()
{
	this.tabs = [];
	this.selected = undefined;
}

/*
 * @param idAnchorElem	The id of the <a> element
 * @param idDivElem		The id of the <div> (content) element
 */
Tabs.prototype.add =
function(idAnchorElem, idDivElem)
{
	var obj =
	{
		anchorElem:	document.getElementById(idAnchorElem),
		divElem:	document.getElementById(idDivElem),
	};
	if (!obj.anchorElem)
		throw "No <a> elem with id " + idAnchorElem;
	if (!obj.divElem)
		throw "No <div> elem with id " + idDivElem;
	this.tabs.push(obj);

	var this_ = this;
	$(obj.anchorElem).bind('mousedown', function(e)
	{
		this_._setNewSelected(obj);
	});

	this._makeUnselected(obj);
	if (this.tabs.length === 1)
		this._setNewSelected(obj);
}

// Set a new selected tab
Tabs.prototype._setNewSelected =
function(newSelected)
{
	if (newSelected === this.selected)
		return;
	var oldSelected = this.selected;
	this._makeUnselected(oldSelected);
	this._makeSelected(newSelected);
	this.selected = newSelected;
}

Tabs.prototype._makeUnselected =
function(obj)
{
	if (!obj)
		return;
	$(obj.anchorElem).removeClass("selected");
	$(obj.divElem).css("display", "none");
}

Tabs.prototype._makeSelected =
function(obj)
{
	if (!obj)
		return;
	$(obj.anchorElem).addClass("selected");
	$(obj.divElem).css("display", "block");
}
