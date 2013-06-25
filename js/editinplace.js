// Copyright (C) 2011-2012	Regis Houssin		<regis.houssin@capnetworks.com>
// Copyright (C) 2011		Laurent Destailleur	<eldy@users.sourceforge.net>
// Copyright (C) 2012		Herve Prot              <herve.prot@symeos.com>
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
// or see http://www.gnu.org/
//

$(document).ready(function() {
    var element = $('#jeditable_element').html();
    var table_element = $('#jeditable_table_element').html();
    var fk_element = $('#jeditable_fk_element').html();
	
    $('.edit_text').editable(urlSaveInPlace, {
        indicator : indicatorInPlace,
        tooltip   : tooltipInPlace,
        placeholder	: ''
    });
	
    $('.edit_area').editable(urlSaveInPlace, {
        type		: 'text',
        id		: 'key',
        height		: '64px',
        width		: 300,
        tooltip		: tooltipInPlace,
        placeholder	: placeholderInPlace,
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace
    });
	
    $('.edit_wysiwyg').editable(urlSaveInPlace, {
        type		: 'wysiwyg',
        id		: 'key',
        onblur		: 'ignore',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        submitdata	: function(result, settings) {
            return getParameters(this, 'wysiwyg');
        },
        wysiwyg		: {
            controls : {
                separator04 : {
                    visible : true
                },
                insertOrderedList : {
                    visible : true
                },
                insertUnorderedList : {
                    visible : true
                },
                undo : {
                    visible : true
                },
                separator08 : {
                    visible : false
                },
                increaseFontSize : {
                    visible : false
                },
                decreaseFontSize : {
                    visible : false
                }
            }
        }
    });
    
    $('.editval_text').editable(urlSaveInPlace, {
        type		: 'text',
        id		: 'key',
        width		: 300,
        tooltip		: tooltipInPlace,
        placeholder	: placeholderInPlace,
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        submitdata	: function(result, settings) {
            return getParameters(this, 'text');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_text').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.editkey_text').click(function() {
        $( '#viewval_' + $(this).attr('id') ).click();
    });
    $('.viewval_text.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_text').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    $('.editval_textarea').editable(urlSaveInPlace, {
        type		: 'textarea',
        rows		: 4,
        id		: 'key',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        loadurl		: urlLoadInPlace,
        loaddata	: function(result, settings) {
            return getParameters(this, 'textarea');
        },
        submitdata	: function(result, settings) {
            return getParameters(this, 'textarea');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_textarea').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.editkey_textarea').click(function() {
        $('#viewval_' + $(this).attr('id')).click();
    });
    $('.viewval_textarea.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_textarea').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });

    $('.editval_ckeditor').editable(urlSaveInPlace, {
        type		: 'ckeditor',
        id		: 'key',
        onblur		: 'ignore',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        ckeditor	: {
            customConfig: ckeditorConfig,
            toolbar: $('#ckeditor_toolbar').val()
        },
        submitdata	: function(result, settings) {
            return getParameters(this, 'ckeditor');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_ckeditor').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.editkey_ckeditor').click(function() {
        $( '#viewval_' + $(this).attr('id') ).click();
    });
    $('.viewval_ckeditor.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_ckeditor').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
    $('.editkey_ckeditor').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.editkey_ckeditor').click(function() {
        $( '#viewval_' + $(this).attr('id') ).click();
    });
    $('.viewval_ckeditor.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_ckeditor').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    $('.editval_string').editable(urlSaveInPlace, {
        type		: 'text',
        id		: 'key',
        width		: 300,
        tooltip		: tooltipInPlace,
        placeholder	: placeholderInPlace,
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        submitdata	: function(result, settings) {
            return getParameters(this, 'string');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_string').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.editkey_string').click(function() {
        $( '#viewval_' + $(this).attr('id') ).click();
    });
    $('.viewval_string.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_string').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    $('.editval_numeric').editable(urlSaveInPlace, {
        type		: 'text',
        id		: 'key',
        width		: 100,
        tooltip		: tooltipInPlace,
        placeholder	: placeholderInPlace,
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        submitdata	: function(result, settings) {
            return getParameters(this, 'numeric');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_numeric').hover(
        function () {
            $( '#viewval_' + $(this).attr('id') ).addClass("viewval_hover");
        },
        function () {
            $( '#viewval_' + $(this).attr('id') ).removeClass("viewval_hover");
        }
        );
    $('.editkey_numeric').click(function() {
        $( '#viewval_' + $(this).attr('id') ).click();
    });
    $('.viewval_numeric.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_numeric').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    $('.editval_datepicker').editable(urlSaveInPlace, {
        type		: 'datepicker',
        id			: 'key',
        onblur		: 'ignore',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        submitdata	: function(result, settings) {
            return getParameters(this, 'datepicker');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_datepicker').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.viewval_datepicker.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_datepicker').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    $('.editval_select').editable(urlSaveInPlace, {
        type		: 'select',
        id		: 'key',
        onblur		: 'ignore',
        cssclass	: 'flat',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        loadurl		: urlLoadInPlace,
        loaddata	: function(result, settings) {
            return getParameters(this, 'select');
        },
        submitdata	: function(result, settings) {
            return getParameters(this, 'select');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_select').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.viewval_select.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_select').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
	
    // for test only (not stable)
    $('.editval_autocomplete').editable(urlSaveInPlace, {
        type		: 'autocomplete',
        id		: 'key',
        width		: 300,
        onblur		: 'ignore',
        tooltip		: tooltipInPlace,
        placeholder	: '&nbsp;',
        cancel		: cancelInPlace,
        submit		: submitInPlace,
        indicator	: indicatorInPlace,
        autocomplete : {
            /*source: function(request, response) {
                console.log($(this));
                $.ajax({
                    url: urlLoadInPlace,
                    data: {
                        //"id": oTable.fnGetData( this.parentNode, 0),
                        "id" : $(this).val(),
                        "element_class" : "<?php echo get_class($this); ?>",
                        "type":"autocomplete"
                    //"key": "editval_"+columns[oTable.fnGetPosition( this )[2]]
                    },
                    dataType : 'json',
                    type : 'GET'
                });*/
            url : urlLoadInPlace
            //data : function(result, settings) {
            //    return getParameters(this, 'select');
            //}
        },
        submitdata	: function(result, settings) {
            return getParameters(this, 'select');
        },
        onreset		: function(result, settings) {
            getDefault(settings);
        }
    });
    $('.editkey_autocomplete').hover(
        function () {
            $('#viewval_' + $(this).attr('id')).addClass("viewval_hover");
        },
        function () {
            $('#viewval_' + $(this).attr('id')).removeClass("viewval_hover");
        }
        );
    $('.viewval_autocomplete.active').click(function() {
        $('#viewval_' + $(this).attr('id').substr(8)).hide();
        $('#editval_' + $(this).attr('id').substr(8)).show().click();
    });
    $('.editkey_autocomplete').click(function() {
        $('#viewval_' + $(this).attr('id')).hide();
        $('#editval_' + $(this).attr('id')).show().click();
    });
    
    $('.array_tag_handler').tagHandler({
        getData: {
            id: $('#element_id_Tag').val(),
            element_class: $('#element_class_Tag').val(),
            type: "tag",
            key: "editval_Tag"
        },
        getURL: tagLoadInPlace,
        updateData: {
            id: $('#element_id_Tag').val(),
            element_class: $('#element_class_Tag').val(),
            type: "tag",
            key: "editval_Tag"
        },
        updateURL: tagSaveInPlace,
        autocomplete: true,
        autoUpdate: true
    });
	
    function getParameters(obj, type) {
        //console.log(obj);
        var htmlname		= $(obj).attr('id').substr(8);
        //console.log(htmlname);
        var element		= $('#element_' + htmlname).val();
        var table_element	= $('#table_element_' + htmlname).val();
        var fk_element		= $('#fk_element_' + htmlname).val();
        var loadmethod		= $('#loadmethod_' + htmlname).val();
        var savemethod		= $('#savemethod_' + htmlname).val();
        var ext_element		= $('#ext_element_' + htmlname).val();
        var timestamp		= $('#timestamp').val();
        var element_class       = $('#element_class_' + htmlname).val();
        var element_id          = $('#element_id_' + htmlname).val();
		
        return {
            type: type,
            element: element,
            table_element: table_element,
            fk_element: fk_element,
            loadmethod: loadmethod,
            savemethod: savemethod,
            timestamp: timestamp,
            ext_element: ext_element,
            id:element_id,
            element_class:element_class
        };
    }
	
    /*function getResult(obj, result) {
        var res = $.parseJSON(result);
        if (res.error) {
            $(obj).html(obj.revert);
            $.jnotify(res.error, "error", true);
        } else {
            var htmlname = $(obj).attr('id').substr(8);
            var success = $( '#success_' + htmlname ).val();
            if (success != undefined) {
                $.jnotify(success, "ok");
            }
            $(obj).html(res.value);
            $(obj).hide();
            $('#viewval_' + htmlname).html(res.view);
            $('#viewval_' + htmlname).show();
        }
    }*/
	
    function getDefault(settings) {
        var htmlname = $(settings).attr('id').substr(8);
        $('#editval_' + htmlname).hide();
        $('#viewval_' + htmlname).show();
    }
});
