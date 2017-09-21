/* jshint ignore:start */
define(['jquery','core/log'], function($, log) {

    "use strict"; // jshint ;_;

    log.debug('Require terms: initialising');

    return {

        instanceprops: null,

        //pass in config, the jquery video/audio object, and a function to be called when conversion has finshed
        init: function(props){
            this.instanceprops={};
            this.instanceprops.config=props;
            var controls={};
            controls.thetermscheckbox = $('input.enrol_stripepayment_termscheck');
            //disable the button beause they need to check the terms and conditions
            controls.thebutton= $('.enrol_stripepayment_form button.stripe-button-el');
            controls.thebutton.prop('disabled',true);
            //show the form now that the button is disabled
            controls.theform = $('.enrol_stripepayment_form');
            controls.theform.show();


            this.instanceprops.controls = controls;
            this.register_events();
        },
        register_events: function(){
            var props = this.instanceprops;
            this.instanceprops.controls.thetermscheckbox.on('change',function(){
                props.controls.thebutton.prop('disabled',!(this.checked));
            });
        }

   };//end of returned object
});//total end
