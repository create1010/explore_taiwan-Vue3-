<template>
    <div style="position: relative;" class="mapPage">
        <div class="searchBar">
            <input type="text" id="searchInput" placeholder="搜尋" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="map"></div>
        <div id="placeDetails" class="placeDetails" ref="clickAdd"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { useClickMapStore } from '../../stores/clickMap';

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    version: 'weekly',
    libraries: ['places'], // 使用 Places library 實現搜尋功能
});
const mapStore = useClickMapStore();
const clickAdd = ref(null);
let map;
let autocomplete;
let placeDetailsService;
let markers = [];

const addJourney = (details) => {
    mapStore.selectLocation = details;

}

onMounted(() => {
    loader.load().then(() => {
        // 確保 `window.google` 已經加載
        if (window.google) {
            // 初始化地圖
            map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 25.033, lng: 121.5654 }, // 台灣經緯度
                zoom: 8,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: false,
                draggableCursor: 'pointer', // 鼠標懸停時的樣式
                draggingCursor: 'move' // 拖曳時的樣式
            });

            // 初始化 Places Autocomplete
            autocomplete = new window.google.maps.places.Autocomplete(
                document.getElementById('searchInput'),
                { types: [] }
            );

            placeDetailsService = new window.google.maps.places.PlacesService(map);

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                const placeDetails = document.getElementById('placeDetails');

                // 清除之前的標記
                markers.forEach(marker => marker.setMap(null));
                markers = [];

                placeDetails.innerHTML = '';
                placeDetails.style.display = 'none';


                if (place.geometry) {
                    map.setCenter(place.geometry.location);

                    // 添加新的標記
                    const newMarker = new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: map
                    });

                    markers.push(newMarker);

                    // 使用 PlaceDetailsService 取得詳細資訊
                    placeDetailsService.getDetails({ placeId: place.place_id }, (details, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && details) {
                            // 顯示詳細資訊
                            placeDetails.innerHTML = `
                                <h3>${details.name}</h3>
                                <p>地址: ${details.formatted_address}</p>
                                <p>電話: ${details.formatted_phone_number}</p>
                                <p>網站: <a href="${details.website}" target="_blank">${details.website}</a></p>
                                <p>類型: ${details.types.join(', ')}</p>
                                <p>評分: ${details.rating}</p>
                                <p>營業時間: ${details.opening_hours ? details.opening_hours.weekday_text.join('<br>') : ''}</p>
                                <div class="buttons">
                                    <button class="addJourney" data-name="${details.name}">加入行程</button>
                                </div>
                            `;
                            placeDetails.style.display = 'block';

                            placeDetails.addEventListener('click', (event) => {
                                if (event.target && event.target.classList.contains('addJourney')) {
                                    const name = event.target.getAttribute('data-name');
                                    addJourney(name);
                                }
                            })
                        } else {
                            console.error('Failed to get place details:', status);
                            placeDetails.style.display = 'none';
                        }
                    });
                } else {
                    console.error('Place details are not available.');
                    placeDetails.style.display = 'none';
                }
            });
            document.getElementById('searchInput').addEventListener('input', (event) => {
                if (event.target.value === '') {
                    const placeDetails = document.getElementById('placeDetails');
                    placeDetails.innerHTML = '';
                    placeDetails.style.display = 'none';
                    // 清除地圖上的標記
                    markers.forEach(marker => marker.setMap(null));
                    markers = [];

                    // 重置地圖中心
                    map.setCenter({ lat: 25.033, lng: 121.5654 });
                }
            })
        } else {
            console.error('Google Maps API is not available on the window object');
        }
    }).catch((error) => {
        console.error('Error loading Google Maps API:', error);
    });
});
</script>

<style lang="scss" scoped>
.mapPage {
    position: relative;
    width: 100%;

    .searchBar {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        width: 80%;
        max-width: 600px;
        background-color: #ffffff;
        border-radius: 25px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 5px 10px;
        border: 1px solid #ddd;
        z-index: 10;

        #searchInput {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 25px;
            outline: none;
            font-size: 16px;
            box-sizing: border-box;
        }

        .fa-magnifying-glass {
            color: #aaa;
            font-size: 18px;
            margin-left: 10px;
        }
    }

    #map {
        width: 100%;
        height: 100%;
    }

    .placeDetails {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 15px;
        width: 80%;
        max-width: 600px;
        z-index: 10;
        display: none;

        :deep(.buttons) {
            display: flex;
            justify-content: end;

            .addJourney {
                border: none;
                background-color: #0593D7;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                transition: .3s ease;
                cursor: pointer;

                &:hover {
                    color: #0593D7;
                    background-color: #fff;
                    box-shadow: 1px 1px 1px #ccc;
                }
            }
        }
    }
}
</style>
