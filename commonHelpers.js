import{S as h,i as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="41829655-bf270f19af5dfab9e341d37e3",a=document.querySelector(".card-container"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");g.addEventListener("submit",L);const p=new h(".card-container a",{captionsData:"alt",captionDelay:250});function L(i){i.preventDefault();const r=i.currentTarget,o=r.elements.query.value;o.trim()&&($(),q(),setTimeout(()=>{b(o).then(w).catch(c).finally(()=>{r.reset(),S()})},500))}function b(i){const r=`https://pixabay.com/api/?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function w(i){const r=i.hits||[];if(r.length===0){c();return}const o=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:d})=>`
        <li class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img 
                class="gallery-image" 
                src="${s}" 
                alt="${t}"
                width="360" 
                height="200"
                />
                <ul class="gallery-item-description">
                    <li>Likes: ${n}</li>
                    <li>Views: ${u}</li>
                    <li>Downloads: ${d}</li>
                    <li>Comments: ${f}</li>
                </ul>
            </a>
        </li>
        `).join("");a.innerHTML=o,p.refresh()}function c(i){m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){a.innerHTML=""}function q(){l.classList.add("visible")}function S(){l.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
