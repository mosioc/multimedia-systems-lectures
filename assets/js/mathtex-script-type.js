// Mostly copied from https://github.com/KaTeX/KaTeX/tree/main/contrib/mathtex-script-type
// Options for global command definitions added by @pdmosses

const macros = {};

document.addEventListener('DOMContentLoaded', function() {
    let scripts = document.body.getElementsByTagName("script");
    scripts = Array.prototype.slice.call(scripts);
    scripts.forEach(function(script) {
        if (!script.type || !script.type.match(/math\/tex/i)) {
            return;
        }
        
        const display = script.type.match(/mode\s*=\s*display(;|\s|\n|$)/) != null;
        const katexElement = document.createElement(display ? "div" : "span");
        katexElement.setAttribute("class", display ? "equation" : "inline-equation");
        
        try {
            const katexOptions = {
                displayMode: display,
                globalGroup: true,
                trust: true,
                strict: false,
                throwOnError: false,
                output: 'html',
                maxSize: 500,
                maxExpand: 1000,
                fleqn: false,
                leqno: false,
                colorIsTextColor: true,
                macros
            };
            
            katex.render(script.text.trim(), katexElement, katexOptions);
        } catch (err) {
            console.warn('KaTeX rendering error:', err.message);
            katexElement.textContent = script.text;
            katexElement.classList.add('katex-error');
        }
        
        if (display) {
            const wrapper = document.createElement('div');
            wrapper.className = 'katex-display';
            wrapper.appendChild(katexElement);
            script.parentNode.replaceChild(wrapper, script);
        } else {
            script.parentNode.replaceChild(katexElement, script);
        }
    });
});