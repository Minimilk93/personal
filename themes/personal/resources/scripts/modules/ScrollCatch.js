import scrollMonitor from 'scrollMonitor';
const sections = $('.section');

export default function ScrollCatch() {
    sections.each(function() {
        let myElement = this;
        let elementWatcher = scrollMonitor.create(myElement);

        elementWatcher.fullyEnterViewport(function() {
            this.watchItem.setAttribute('data-active', true);
        });
    });
}

