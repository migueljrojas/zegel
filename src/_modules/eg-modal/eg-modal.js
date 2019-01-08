'use strict';

// Constructor
var EgModal = function() {
    var modal = $('.eg-modal');
    var modalTriggers = $('[data-modal]');

    if (modal) {
        modalTriggers.on('click', function() {
            var actionType = $(this).data('modal');

            if (actionType === 'open') {
                openModal();
            } else {
                closeModal();
            }
        });

        function openModal() {
            modal.addClass('-open');
            $('body').addClass('-hideOverflow');
        }

        function closeModal() {
            modal.removeClass('-open');
            $('body').removeClass('-hideOverflow');
        }
    }

    var votarBlock = $('#votar');
    var terminosBlock = $('#terminos');
    var historias = $('.home__historias__container')
};

module.exports = EgModal;
