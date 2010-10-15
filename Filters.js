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

function Filters()
{
	theDialogManager.make("autodl-filters", theUILang.autodlFilters,
		'<div id="autodl-filters">' +
			'<div id="autodl-filters-left">' +
				'<div id="autodl-filters-list" />' +
				'<div id="autodl-filters-list-buttons">' +
					'<input type="button" class="Button" value="' + theUILang.autodlNew + '" />' +
					'<input type="button" class="Button" id="autodl-filters-remove-button" value="' + theUILang.autodlRemove + '" />' +
				'</div>' +
			'</div>' +
			'<div id="autodl-filters-right">' +
				'<div id="autodl-filters-tabs">' +
					'<ul class="tabs-header">' +
						'<li><a id="autodl-filters-tab-general">' + theUILang.autodlGeneral + '</a></li>' +
						'<li><a id="autodl-filters-tab-tv">' + theUILang.autodlTvMovies + '</a></li>' +
						'<li><a id="autodl-filters-tab-music">' + theUILang.autodlMusic + '</a></li>' +
						'<li><a id="autodl-filters-tab-advanced">' + theUILang.autodlAdvanced + '</a></li>' +
						'<li><a id="autodl-filters-tab-upload">' + theUILang.autodlUploadMethod + '</a></li>' +
					'</ul>' +
				'</div>' +
				'<div id="autodl-filters-contents">' +
					'<div id="autodl-filters-contents-general">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-filters-name">' + theUILang.autodlDisplayName + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-name" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-match-releases">' + theUILang.autodlMatchReleases + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-match-releases" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-except-releases">' + theUILang.autodlExceptReleases + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-except-releases" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-match-sites">' + theUILang.autodlMatchSites + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-match-sites" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-min-size">' + theUILang.autodlMinimumSize + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-min-size" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-max-size">' + theUILang.autodlMaximumSize + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-max-size" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-filters-contents-tv">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-filters-shows">' + theUILang.autodlTvShowMovie + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-shows" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-seasons">' + theUILang.autodlSeasons + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-seasons" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-episodes">' + theUILang.autodlEpisodes + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-episodes" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-resolutions">' + theUILang.autodlResolutions + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-resolutions" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-encoders">' + theUILang.autodlEncoders + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-encoders" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-sources">' + theUILang.autodlSources + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-sources" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-years1">' + theUILang.autodlYears + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-years1" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-filters-contents-music">' +
						'<p>' + theUILang.autodlWhatWafflesOnly + '</p>' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-filters-years2">' + theUILang.autodlYears + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-years2" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-artists">' + theUILang.autodlArtists + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-artists" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-albums">' + theUILang.autodlAlbums + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-albums" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-formats">' + theUILang.autodlFormats + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-formats" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-bitrates">' + theUILang.autodlBitrates + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-bitrates" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-media">' + theUILang.autodlMedia + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-media" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-tags">' + theUILang.autodlTags + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-tags" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
						'<label for="autodl-filters-scene">' + theUILang.autodlScene + '</label>' +
						'<select id="autodl-filters-scene">' +
							'<option>' + theUILang.autodlDontCare + '</option>' +
							'<option>' + theUILang.autodlYes + '</option>' +
							'<option>' + theUILang.autodlNo + '</option>' +
						'</select>' +
						'<label for="autodl-filters-log">Log</label>' +
						'<select id="autodl-filters-log">' +
							'<option>' + theUILang.autodlDontCare + '</option>' +
							'<option>' + theUILang.autodlYes + '</option>' +
							'<option>' + theUILang.autodlNo + '</option>' +
						'</select>' +
						'<label for="autodl-filters-cue">Cue</label>' +
						'<select id="autodl-filters-cue">' +
							'<option>' + theUILang.autodlDontCare + '</option>' +
							'<option>' + theUILang.autodlYes + '</option>' +
							'<option>' + theUILang.autodlNo + '</option>' +
						'</select>' +
					'</div>' +
					'<div id="autodl-filters-contents-advanced">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td><label for="autodl-filters-match-categories">' + theUILang.autodlMatchCategories + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-match-categories" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-except-categories">' + theUILang.autodlExceptCategories + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-except-categories" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-match-uploaders">' + theUILang.autodlMatchUploaders + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-match-uploaders" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-except-uploaders">' + theUILang.autodlExceptUploaders + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-except-uploaders" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-except-sites">' + theUILang.autodlExceptSites + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-except-sites" /></td>' +
								'</tr>' +
								'<tr>' +
									'<td><label for="autodl-filters-max-pretime">' + theUILang.autodlMaxPreTime + '</label></td>' +
									'<td><input type="text" class="textbox" id="autodl-filters-max-pretime" /></td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>' +
					'<div id="autodl-filters-contents-upload"/>' +
				'</div>' +
			'</div>' +
			'<div class="aright buttons-list dlgbuttons">' +
				'<input type="button" value="' + theUILang.ok + '" class="OK Button" />' +
				'<input type="button" value="' + theUILang.Cancel + '" class="Cancel Button" />' +
			'</div>' +
		'</div>'
	);

	this.options =
	[
		new DialogOptionText("autodl-filters-match-releases", "match-releases", ""),
		new DialogOptionText("autodl-filters-except-releases", "except-releases", ""),
		new DialogOptionText("autodl-filters-match-categories", "match-categories", ""),
		new DialogOptionText("autodl-filters-except-categories", "except-categories", ""),
		new DialogOptionText("autodl-filters-match-sites", "match-sites", ""),
		new DialogOptionText("autodl-filters-except-sites", "except-sites", ""),
		new DialogOptionText("autodl-filters-min-size", "min-size", ""),
		new DialogOptionText("autodl-filters-max-size", "max-size", ""),
		new DialogOptionText("autodl-filters-shows", "shows", ""),
		new DialogOptionText("autodl-filters-seasons", "seasons", ""),
		new DialogOptionText("autodl-filters-episodes", "episodes", ""),
		new DialogOptionText("autodl-filters-resolutions", "resolutions", ""),
		new DialogOptionText("autodl-filters-sources", "sources", ""),
		new DialogOptionText("autodl-filters-years1", "years", ""),
		new DialogOptionText("autodl-filters-encoders", "encoders", ""),
		new DialogOptionText("autodl-filters-albums", "albums", ""),
		new DialogOptionText("autodl-filters-formats", "formats", ""),
		new DialogOptionText("autodl-filters-bitrates", "bitrates", ""),
		new DialogOptionText("autodl-filters-media", "media", ""),
		new DialogOptionText("autodl-filters-tags", "tags", ""),
		new DialogOptionText("autodl-filters-match-uploaders", "match-uploaders", ""),
		new DialogOptionText("autodl-filters-except-uploaders", "except-uploaders", ""),
		new DialogOptionText("autodl-filters-max-pretime", "max-pretime", ""),
	];

	var this_ = this;

	this.tabs = new Tabs();
	this.tabs.add("autodl-filters-tab-general", "autodl-filters-contents-general");
	this.tabs.add("autodl-filters-tab-tv", "autodl-filters-contents-tv");
	this.tabs.add("autodl-filters-tab-music", "autodl-filters-contents-music");
	this.tabs.add("autodl-filters-tab-advanced", "autodl-filters-contents-advanced");
	this.tabs.add("autodl-filters-tab-upload", "autodl-filters-contents-upload");

	var names = ["scene", "log", "cue"];
	for (var i = 0; i < names.length; i++)
	{
		var dropdown = new DropDownBox('autodl-filters-' + names[i]);
		this[names[i] + "DropDownBox"] = dropdown;
		dropdown.add("");
		dropdown.add("true");
		dropdown.add("false");
	}

	this.filterListBox = new ListBox("autodl-filters-list");
	this.filterListBox.onSelected = function(oldObj, newObj) { this_._onFilterSelected(oldObj, newObj); }

	this.uploadMethod = new UploadMethod("autodl-filters-contents-upload");
}

Filters.prototype.onBeforeShow =
function(configFile)
{
	this.initFilters(configFile);
}

Filters.prototype.onAfterHide =
function()
{
	this.filterListBox.removeAll();
	delete this.filterSections;
}

Filters.prototype.initFilters =
function(configFile)
{
	this.nextId = 0;
	this.filterSections = [];
	var ary = configFile.getSectionsByType("filter");
	for (var i = 0; i < ary.length; i++)
		this.addFilterSection(ary[i].clone());

	if (this.filterSections.length === 0)
		this._onFilterSelected();
	else
		this.filterListBox.simulateSelect(0);
}

Filters.prototype.addFilterSection =
function(section)
{
	var obj =
	{
		section: section,
		idNum: this.nextId,
	};
	obj.checkboxElem = $('<input type="checkbox" />')[0];
	obj.labelElem = $('<label>' + section.name + '</label>')[0];

	if (section.getOption("enabled", "true", "bool").getValue())
		$(obj.checkboxElem).attr("checked", "checked");

	this.filterListBox.append($(obj.checkboxElem).add(obj.labelElem), obj);

	this.filterSections.push(obj);
	this.nextId++;
}

Filters.prototype._onFilterSelected =
function(oldObj, newObj)
{
	if (oldObj)
	{
		//TODO: Save data in oldObj.section
	}

	var section = (newObj || {}).section;
	initDialogOptions(section, this.options);
	this.uploadMethod.initFields(section);
	$("#autodl-filters-name").val(section ? section.name : "");

	function setDropDown(dropdown, name)
	{
		var val = getSectionOptionValue(section, name, "", "text");
		if (val !== "")
			val = convertStringToBoolean(val, "");
		dropdown.select(val.toString());
	}
	setDropDown(this.sceneDropDownBox, "scene");
	setDropDown(this.logDropDownBox, "log");
	setDropDown(this.cueDropDownBox, "cue");

	var elems = $("#autodl-filters-remove-button").
				add($("input, select", $("#autodl-filters-right")[0]));
	enableJqueryElem(elems, newObj);
}
