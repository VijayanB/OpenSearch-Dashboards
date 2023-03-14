/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getGeoShapeFilterField } from './geo_shape_filter';

describe('geo shape filter', function () {
  describe('getGeoShapeFilterField', function () {
    it('should return the name of the field a geo_shape query is targeting', () => {
      const filter = {
        geo_shape: {
          geoPointField: {
            shape: {
              coordinates: [{ lat: 1, lon: 1 }],
              type: 'Polygon',
            },
          },
          ignore_unmapped: true,
          relation: 'intersects',
        },
        meta: {
          disabled: false,
          negate: false,
          alias: null,
          params: {
            points: [{ lat: 1, lon: 1 }],
          },
        },
      };
      const result = getGeoShapeFilterField(filter);
      expect(result).toBe('geoPointField');
    });
  });
});
