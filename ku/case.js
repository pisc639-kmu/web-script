(
    async()=>{
				var e=document.querySelector("#console")
//         var e=document.querySelector("#console").cloneNode(true);
//         e.id="answer";
        document.querySelector("div.overflow-y-hidden:nth-child(2) > div:nth-child(2)").appendChild(e);
        a = await fetch("https://codekit.co/api/select-pages/"+window.location.pathname.split("/").at(-1))
        .then(a=>a.json())
        .then(a=>fetch("https://codekit.co/api/test-case-custom/"+String(a[parseInt(document.querySelector('div[style*="background-color: rgb(255, 134, 2);"]').textContent)-1].id)))
        .then(a=>a.json())
        .then(a=>JSON.stringify(a.map(v=>({initCode:v.initCode,output:v.output})),null,4));
        console.log(a,e);
        e.placeholder=a;
    }
)();
