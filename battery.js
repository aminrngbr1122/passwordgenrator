
    (function () {document.querySelectorAll("Battery").forEach(async (ele) => {
        await navigator
            .getBattery()
            .then(function (battery) {
                ele.innerHTML = (ele.getAttribute("no") !== null) ? battery.level * 100 : battery.level * 100 + "%";
            })
            .catch(function (e) {
                ele.innerHTML = "Your browser app does not support the battery api !";
            });
    });
                 });
