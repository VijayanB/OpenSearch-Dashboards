/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Filter, FilterMeta, LatLon } from './meta_filter';

export interface ShapeFilter {
  type: string;
  coordinates: LatLon[];
}
export interface PreIndexedShapeFilter {
  index: string;
  id: string;
  path: string;
}

export type GeoShapeFilterMeta = FilterMeta & {
  params: {
    shape?: ShapeFilter;
    indexed_shape?: PreIndexedShapeFilter;
  };
};

export type GeoShapeFilter = Filter & {
  meta: GeoShapeFilterMeta;
  geo_shape: any;
};

export const isGeoShapeFilter = (filter: any): filter is GeoShapeFilter =>
  filter && filter.geo_shape;

export const getGeoShapeFilterField = (filter: GeoShapeFilter) => {
  return filter.geo_shape && Object.keys(filter.geo_shape).find((key) => key !== 'ignore_unmapped');
};
