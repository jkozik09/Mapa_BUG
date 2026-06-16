var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mapa_Historyczna_1940_1 = new ol.format.GeoJSON();
var features_Mapa_Historyczna_1940_1 = format_Mapa_Historyczna_1940_1.readFeatures(json_Mapa_Historyczna_1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_Historyczna_1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_Historyczna_1940_1.addFeatures(features_Mapa_Historyczna_1940_1);
var lyr_Mapa_Historyczna_1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapa_Historyczna_1940_1, 
                style: style_Mapa_Historyczna_1940_1,
                popuplayertitle: 'Mapa_Historyczna_1940',
                interactive: true,
                title: '<img src="styles/legend/Mapa_Historyczna_1940_1.png" /> Mapa_Historyczna_1940'
            });
var format_VMAP_1990_2 = new ol.format.GeoJSON();
var features_VMAP_1990_2 = format_VMAP_1990_2.readFeatures(json_VMAP_1990_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP_1990_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP_1990_2.addFeatures(features_VMAP_1990_2);
var lyr_VMAP_1990_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP_1990_2, 
                style: style_VMAP_1990_2,
                popuplayertitle: 'VMAP_1990',
                interactive: true,
                title: '<img src="styles/legend/VMAP_1990_2.png" /> VMAP_1990'
            });
var format_SENTINEL_2024_3 = new ol.format.GeoJSON();
var features_SENTINEL_2024_3 = format_SENTINEL_2024_3.readFeatures(json_SENTINEL_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SENTINEL_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SENTINEL_2024_3.addFeatures(features_SENTINEL_2024_3);
var lyr_SENTINEL_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SENTINEL_2024_3, 
                style: style_SENTINEL_2024_3,
                popuplayertitle: 'SENTINEL_2024',
                interactive: true,
                title: '<img src="styles/legend/SENTINEL_2024_3.png" /> SENTINEL_2024'
            });
var format_Rzeka_pyna_chocia_raz_4 = new ol.format.GeoJSON();
var features_Rzeka_pyna_chocia_raz_4 = format_Rzeka_pyna_chocia_raz_4.readFeatures(json_Rzeka_pyna_chocia_raz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzeka_pyna_chocia_raz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzeka_pyna_chocia_raz_4.addFeatures(features_Rzeka_pyna_chocia_raz_4);
var lyr_Rzeka_pyna_chocia_raz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rzeka_pyna_chocia_raz_4, 
                style: style_Rzeka_pyna_chocia_raz_4,
                popuplayertitle: 'Rzeka_płynęła_chociaż_raz',
                interactive: true,
                title: '<img src="styles/legend/Rzeka_pyna_chocia_raz_4.png" /> Rzeka_płynęła_chociaż_raz'
            });
var format_Rzeka_pyna_nieprzerwanie_5 = new ol.format.GeoJSON();
var features_Rzeka_pyna_nieprzerwanie_5 = format_Rzeka_pyna_nieprzerwanie_5.readFeatures(json_Rzeka_pyna_nieprzerwanie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzeka_pyna_nieprzerwanie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzeka_pyna_nieprzerwanie_5.addFeatures(features_Rzeka_pyna_nieprzerwanie_5);
var lyr_Rzeka_pyna_nieprzerwanie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rzeka_pyna_nieprzerwanie_5, 
                style: style_Rzeka_pyna_nieprzerwanie_5,
                popuplayertitle: 'Rzeka_płynęła_nieprzerwanie',
                interactive: true,
                title: '<img src="styles/legend/Rzeka_pyna_nieprzerwanie_5.png" /> Rzeka_płynęła_nieprzerwanie'
            });
var format_siatka_heksagonow_SENTINEL_VMAP_6 = new ol.format.GeoJSON();
var features_siatka_heksagonow_SENTINEL_VMAP_6 = format_siatka_heksagonow_SENTINEL_VMAP_6.readFeatures(json_siatka_heksagonow_SENTINEL_VMAP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_heksagonow_SENTINEL_VMAP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_heksagonow_SENTINEL_VMAP_6.addFeatures(features_siatka_heksagonow_SENTINEL_VMAP_6);
var lyr_siatka_heksagonow_SENTINEL_VMAP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_heksagonow_SENTINEL_VMAP_6, 
                style: style_siatka_heksagonow_SENTINEL_VMAP_6,
                popuplayertitle: 'siatka_heksagonow_SENTINEL_VMAP',
                interactive: true,
    title: 'siatka_heksagonow_SENTINEL_VMAP<br />\
    <img src="styles/legend/siatka_heksagonow_SENTINEL_VMAP_6_0.png" /> 0 - 10<br />\
    <img src="styles/legend/siatka_heksagonow_SENTINEL_VMAP_6_1.png" /> 10 - 24<br />\
    <img src="styles/legend/siatka_heksagonow_SENTINEL_VMAP_6_2.png" /> 24 - 42<br />\
    <img src="styles/legend/siatka_heksagonow_SENTINEL_VMAP_6_3.png" /> 42 - 65<br />\
    <img src="styles/legend/siatka_heksagonow_SENTINEL_VMAP_6_4.png" /> 65 - 100<br />' });
var format_siatka_heksagonow_VMAP_Historyczna_7 = new ol.format.GeoJSON();
var features_siatka_heksagonow_VMAP_Historyczna_7 = format_siatka_heksagonow_VMAP_Historyczna_7.readFeatures(json_siatka_heksagonow_VMAP_Historyczna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_heksagonow_VMAP_Historyczna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_heksagonow_VMAP_Historyczna_7.addFeatures(features_siatka_heksagonow_VMAP_Historyczna_7);
var lyr_siatka_heksagonow_VMAP_Historyczna_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_heksagonow_VMAP_Historyczna_7, 
                style: style_siatka_heksagonow_VMAP_Historyczna_7,
                popuplayertitle: 'siatka_heksagonow_VMAP_Historyczna',
                interactive: true,
    title: 'siatka_heksagonow_VMAP_Historyczna<br />\
    <img src="styles/legend/siatka_heksagonow_VMAP_Historyczna_7_0.png" /> 0 - 10<br />\
    <img src="styles/legend/siatka_heksagonow_VMAP_Historyczna_7_1.png" /> 10 - 24<br />\
    <img src="styles/legend/siatka_heksagonow_VMAP_Historyczna_7_2.png" /> 24 - 42<br />\
    <img src="styles/legend/siatka_heksagonow_VMAP_Historyczna_7_3.png" /> 42 - 65<br />\
    <img src="styles/legend/siatka_heksagonow_VMAP_Historyczna_7_4.png" /> 65 - 100<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Mapa_Historyczna_1940_1.setVisible(true);lyr_VMAP_1990_2.setVisible(true);lyr_SENTINEL_2024_3.setVisible(true);lyr_Rzeka_pyna_chocia_raz_4.setVisible(true);lyr_Rzeka_pyna_nieprzerwanie_5.setVisible(true);lyr_siatka_heksagonow_SENTINEL_VMAP_6.setVisible(true);lyr_siatka_heksagonow_VMAP_Historyczna_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Mapa_Historyczna_1940_1,lyr_VMAP_1990_2,lyr_SENTINEL_2024_3,lyr_Rzeka_pyna_chocia_raz_4,lyr_Rzeka_pyna_nieprzerwanie_5,lyr_siatka_heksagonow_SENTINEL_VMAP_6,lyr_siatka_heksagonow_VMAP_Historyczna_7];
lyr_Mapa_Historyczna_1940_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WSK_KSZTAL': 'WSK_KSZTAL', });
lyr_VMAP_1990_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WSK_KSZTAL': 'WSK_KSZTAL', });
lyr_SENTINEL_2024_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WSK_KSZTAL': 'WSK_KSZTAL', });
lyr_Rzeka_pyna_chocia_raz_4.set('fieldAliases', {'FID_BUG_pr': 'FID_BUG_pr', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'WSK_KSZTAL': 'WSK_KSZTAL', 'FID_BUG_SE': 'FID_BUG_SE', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'WSK_KSZT_1': 'WSK_KSZT_1', 'FID_BUG_za': 'FID_BUG_za', 'WSK_KSZT_2': 'WSK_KSZT_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rzeka_pyna_nieprzerwanie_5.set('fieldAliases', {'FID_BUG_pr': 'FID_BUG_pr', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_BUG_SE': 'FID_BUG_SE', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'FID_BUG_za': 'FID_BUG_za', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZ_1': 'DLUG_BRZ_1', 'DLUGOSC_1': 'DLUGOSC_1', 'DOKLADNO_1': 'DOKLADNO_1', 'DOSTEPNO_1': 'DOSTEPNO_1', 'GLEBOKOSC_': 'GLEBOKOSC_', 'ISTNIENIE_': 'ISTNIENIE_', 'KAT_HYDRO_': 'KAT_HYDRO_', 'KAT_PLYWU_': 'KAT_PLYWU_', 'KAT_POJE_1': 'KAT_POJE_1', 'KAT_POLOZ_': 'KAT_POLOZ_', 'KAT_WODY_1': 'KAT_WODY_1', 'NAJW_WYS_1': 'NAJW_WYS_1', 'NAZWA_1': 'NAZWA_1', 'OBIEKT_1': 'OBIEKT_1', 'OPR_UPUST_': 'OPR_UPUST_', 'OPR_ZBURZ_': 'OPR_ZBURZ_', 'POCH_HYD_1': 'POCH_HYD_1', 'PRED_PRZ_1': 'PRED_PRZ_1', 'SREDNIA__1': 'SREDNIA__1', 'STAT_EKS_1': 'STAT_EKS_1', 'SZEROKOSC_': 'SZEROKOSC_', 'TAJNOSC_1': 'TAJNOSC_1', 'TYP_AKWED_': 'TYP_AKWED_', 'TYP_WYBRZ_': 'TYP_WYBRZ_', 'ZN_ORIENT_': 'ZN_ORIENT_', 'POWIERZC_1': 'POWIERZC_1', 'ID_12': 'ID_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_siatka_heksagonow_SENTINEL_VMAP_6.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PERC_Senti': 'PERC_Senti', 'PERC_VMAP': 'PERC_VMAP', 'PERC_Histo': 'PERC_Histo', 'Pole_Senti': 'Pole_Senti', 'Pole_Sen_1': 'Pole_Sen_1', 'Pole_VMAP_': 'Pole_VMAP_', });
lyr_siatka_heksagonow_VMAP_Historyczna_7.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PERC_Senti': 'PERC_Senti', 'PERC_VMAP': 'PERC_VMAP', 'PERC_Histo': 'PERC_Histo', 'Pole_Senti': 'Pole_Senti', 'Pole_Sen_1': 'Pole_Sen_1', 'Pole_VMAP_': 'Pole_VMAP_', });
lyr_Mapa_Historyczna_1940_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'WSK_KSZTAL': 'TextEdit', });
lyr_VMAP_1990_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'WSK_KSZTAL': 'TextEdit', });
lyr_SENTINEL_2024_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'WSK_KSZTAL': 'TextEdit', });
lyr_Rzeka_pyna_chocia_raz_4.set('fieldImages', {'FID_BUG_pr': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'WSK_KSZTAL': 'TextEdit', 'FID_BUG_SE': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'WSK_KSZT_1': 'TextEdit', 'FID_BUG_za': 'TextEdit', 'WSK_KSZT_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rzeka_pyna_nieprzerwanie_5.set('fieldImages', {'FID_BUG_pr': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'FID_BUG_SE': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'FID_BUG_za': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZ_1': 'TextEdit', 'DLUGOSC_1': 'TextEdit', 'DOKLADNO_1': 'TextEdit', 'DOSTEPNO_1': 'TextEdit', 'GLEBOKOSC_': 'TextEdit', 'ISTNIENIE_': 'TextEdit', 'KAT_HYDRO_': 'TextEdit', 'KAT_PLYWU_': 'TextEdit', 'KAT_POJE_1': 'TextEdit', 'KAT_POLOZ_': 'TextEdit', 'KAT_WODY_1': 'TextEdit', 'NAJW_WYS_1': 'TextEdit', 'NAZWA_1': 'TextEdit', 'OBIEKT_1': 'TextEdit', 'OPR_UPUST_': 'TextEdit', 'OPR_ZBURZ_': 'TextEdit', 'POCH_HYD_1': 'TextEdit', 'PRED_PRZ_1': 'TextEdit', 'SREDNIA__1': 'TextEdit', 'STAT_EKS_1': 'TextEdit', 'SZEROKOSC_': 'TextEdit', 'TAJNOSC_1': 'TextEdit', 'TYP_AKWED_': 'TextEdit', 'TYP_WYBRZ_': 'TextEdit', 'ZN_ORIENT_': 'TextEdit', 'POWIERZC_1': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_siatka_heksagonow_SENTINEL_VMAP_6.set('fieldImages', {'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERC_Senti': 'TextEdit', 'PERC_VMAP': 'TextEdit', 'PERC_Histo': 'TextEdit', 'Pole_Senti': 'TextEdit', 'Pole_Sen_1': 'TextEdit', 'Pole_VMAP_': 'TextEdit', });
lyr_siatka_heksagonow_VMAP_Historyczna_7.set('fieldImages', {'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERC_Senti': 'TextEdit', 'PERC_VMAP': 'TextEdit', 'PERC_Histo': 'TextEdit', 'Pole_Senti': 'TextEdit', 'Pole_Sen_1': 'TextEdit', 'Pole_VMAP_': 'TextEdit', });
lyr_Mapa_Historyczna_1940_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'WSK_KSZTAL': 'no label', });
lyr_VMAP_1990_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'WSK_KSZTAL': 'no label', });
lyr_SENTINEL_2024_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'WSK_KSZTAL': 'no label', });
lyr_Rzeka_pyna_chocia_raz_4.set('fieldLabels', {'FID_BUG_pr': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'WSK_KSZTAL': 'no label', 'FID_BUG_SE': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'WSK_KSZT_1': 'no label', 'FID_BUG_za': 'no label', 'WSK_KSZT_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rzeka_pyna_nieprzerwanie_5.set('fieldLabels', {'FID_BUG_pr': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_BUG_SE': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'FID_BUG_za': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZ_1': 'no label', 'DLUGOSC_1': 'no label', 'DOKLADNO_1': 'no label', 'DOSTEPNO_1': 'no label', 'GLEBOKOSC_': 'no label', 'ISTNIENIE_': 'no label', 'KAT_HYDRO_': 'no label', 'KAT_PLYWU_': 'no label', 'KAT_POJE_1': 'no label', 'KAT_POLOZ_': 'no label', 'KAT_WODY_1': 'no label', 'NAJW_WYS_1': 'no label', 'NAZWA_1': 'no label', 'OBIEKT_1': 'no label', 'OPR_UPUST_': 'no label', 'OPR_ZBURZ_': 'no label', 'POCH_HYD_1': 'no label', 'PRED_PRZ_1': 'no label', 'SREDNIA__1': 'no label', 'STAT_EKS_1': 'no label', 'SZEROKOSC_': 'no label', 'TAJNOSC_1': 'no label', 'TYP_AKWED_': 'no label', 'TYP_WYBRZ_': 'no label', 'ZN_ORIENT_': 'no label', 'POWIERZC_1': 'no label', 'ID_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_siatka_heksagonow_SENTINEL_VMAP_6.set('fieldLabels', {'GRID_ID': 'header label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', 'PERC_Senti': 'no label', 'PERC_VMAP': 'no label', 'PERC_Histo': 'no label', 'Pole_Senti': 'no label', 'Pole_Sen_1': 'no label', 'Pole_VMAP_': 'no label', });
lyr_siatka_heksagonow_VMAP_Historyczna_7.set('fieldLabels', {'GRID_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'PERC_Senti': 'no label', 'PERC_VMAP': 'no label', 'PERC_Histo': 'no label', 'Pole_Senti': 'no label', 'Pole_Sen_1': 'no label', 'Pole_VMAP_': 'no label', });
lyr_siatka_heksagonow_VMAP_Historyczna_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});