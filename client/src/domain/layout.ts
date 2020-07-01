import { XYWH, Vec2 } from './geometry';
import { ServiceCard } from './service-card';
import { AccessPointMeta } from './service-map';

export enum PlacementKind {
  FromWorld = 'FromWorld',
  ToWorld = 'ToWorld',
  AnotherNamespace = 'AnotherNamespace',
  InsideWithConnections = 'InsideWithConnections',
  InsideWithoutConnections = 'InsideWithoutConnections',
}

export interface PlacementMeta {
  kind: PlacementKind;
  card: ServiceCard;
  weight: number;
}

export interface PlacementEntry {
  kind: PlacementKind;
  card: ServiceCard;
  geometry: XYWH;
}

export interface EntriesGroup {
  entries: PlacementEntry[];
  bbox: XYWH;
}

export interface Arrow {
  fromServiceId: string;
  toAccessPointId: string;
}

export type Placement = Array<PlacementEntry>;

export interface ServiceConnector {
  id: string;
  sendersIds: Set<string>;
  receiverId: string;
  accessPointsMap: Map<string, AccessPointMeta>;
  position: Vec2;
}

export interface ConnectorArrow {
  connector: ServiceConnector;
  points: Array<Vec2>;
}

export interface SenderArrows {
  senderId: string;
  startPoint: Vec2;

  arrows: Map<string, ConnectorArrow>;
}
