import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer";
import {OSM, Vector as VectorSource} from "ol/source";
import {CoordinatesElement, CoordinatesList, DrawCallback} from "../models";
import {Feature} from "ol";
import Point from "ol/geom/Point";
import OlMap from "ol/Map";
import View from "ol/View";
import {MAP_VIEW_CONFIG} from "../Config";
import {Draw} from "ol/interaction";
import GeometryType from "ol/geom/GeometryType";

export class MapService {
    private mapId: string;
    private map!: OlMap;
    private source!: VectorSource;

    constructor(mapId: string) {
        this.mapId = mapId;
    }

    public init(coordinates: CoordinatesList, drawCallback: DrawCallback) {
        const mapId = this.mapId;
        const raster = new TileLayer({
            source: new OSM(),
        });
        const features = coordinates.map((e: CoordinatesElement) =>
            new Feature({
                geometry: new Point([e.longitude, e.latitude])
            })
        );
        const source = new VectorSource({
            features,
        });
        this.source = source;
        const vector = new VectorLayer({
            source: source,
        });
        this.map = new OlMap({
            layers: [raster, vector],
            target: mapId,
            view: new View(MAP_VIEW_CONFIG)
        });
        const draw = new Draw({
            source: source,
            type: GeometryType.POINT,
        });
        draw.on('drawend', function (event: any) {
            const coordinatesFromMap: [number, number] = event.feature.getGeometry().getCoordinates();
            const coordinates: CoordinatesElement = {
                longitude: coordinatesFromMap[0],
                latitude: coordinatesFromMap[1],
            };
            drawCallback(coordinates);
        });
        this.map.addInteraction(draw);
    }

    public addNewElements(newCoordinates: CoordinatesList) {
        const features = newCoordinates.map((e: CoordinatesElement) =>
            new Feature({
                geometry: new Point([e.longitude, e.latitude])
            })
        );
        this.source.addFeatures(features);
    }

    public destroy() {
        // if Map component will be reusable in SPA application then it should be clean up here.
    }
}