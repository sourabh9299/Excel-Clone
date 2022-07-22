    let fontSizeSelector = document.querySelector('.select_font_f');
    fontSizeSelector.addEventListener("change",function() {
        let myfontSize = fontSizeSelector.value;
        let { rid, cid } = getaddressCidRid();
        let cell = document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`);
        console.log(cell);

        cell.style.fontSize = myfontSize + "px";
        cell.style.font='bold';
    })
        
    function getaddressCidRid() {
        let address = addressbar.value;
        console.log(address);
        return addresstoRidCid(address);
}
   
    function addresstoRidCid(address){
    let ciChar = address.charCodeAt(0);
    let rowid = address.substr(1);
        let cid = Number(ciChar) - 65;
        let rid = Number(rowid) - 1;
    // console.log(cid, rid);
        return { "rid": rid, "cid": cid };
      
}

