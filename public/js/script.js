document.getElementById('historyLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('historyPopup').style.display = 'block';
});

document.getElementById('popularPlacesLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('popularPlacesPopup').style.display = 'block';
});

document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
};

document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchLocation(document.getElementById('searchInput').value);
    }
});

function searchLocation(searchTerm) {
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });
    const searchInput = document.getElementById('searchInput');
    searchInput.value = searchTerm || searchInput.value.toLowerCase();
    const place = historicPlaces.find(place => place.name.toLowerCase().includes(searchInput.value));
    if (place) {
        map.setView(place.latLng, 15);
        let found = false;
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker && layer.getLatLng().equals(L.latLng(place.latLng))) {
                layer.openPopup();
                found = true;
            }
        });

        if (!found) {
            const marker = L.marker(place.latLng).addTo(map);
            marker.bindPopup(`
                <div>
                    <h3>${place.name}</h3>
                    <img src="${place.imageUrl}" alt="${place.name}" style="width:100px; height:auto;">
                    <br>
                    <a href="${place.infoUrl}" target="_blank">Daha Fazla Bilgi</a>
                </div>
            `).openPopup();
        }
    } else {
        alert('Aradığınız yer bulunamadı! - Aradığınız tarihi mekanın adını tam giriniz...');
    }
}

const body = document.body;
const footer = document.getElementById("footer");

body.addEventListener("mouseover", () => {
    body.classList.add("transition");
    footer.classList.add("collapse");
});

body.addEventListener("mouseout", () => {
    body.classList.remove("transition");
    footer.classList.remove("collapse");
});
