const makeListEle = document.getElementById("makeList");
let make = makeListEle.value;

makeList.addEventListener("change", async () => {
    make = makeList.value;
    await getModels(make);
});

async function getModels() {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
    const data = await response.json();
    await appendModels(data.Results);

}

async function appendModels(models) {
    const modelListEle = document.getElementById("modelList");
    modelListEle.innerHTML = "";
    for (let model of models) {
        const liElem = document.createElement("li");
        liElem.innerText = model.Model_Name;
        modelListEle.appendChild(liElem);
        console.log(model.Model_Name);
    }
}
