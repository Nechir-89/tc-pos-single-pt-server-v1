# POS for Single Point of Sale - Server

### Notes
- In version one, there are no APIs for (expired_items, damaged_items, and perked_items) tables
- The term supplier used in place of wholesaler

### Updating stock expire date
- Version will be set to 1.2.0

### Setting stock state items as expired items
- Version will be set to 1.3.0
- Effected tables (item_state and stocks_state)
- Effected Fields
  - total_available_units ==> item_state
  - total_available_pcs ===> item_state
  - current_pcs ===> stocks_state
  - current_units ===> stocks_state
  - expired_units ===> stocks_state
  - expired_pcs ===> stocks_state
- set_stock_state_expire_service service is also updating total_available_units and pcs, the query can be added to item state API but we are expecting not to reuse it.

### Updating stock barcode
- The API can also be used to set stock as non-scan stock too
- Version will be set 1.4.0

### Updating stock state damaged items
- The version number will be set 1.5.0
- Effected tables (item_state and stocks_state)
- Effected Fields
  - total_available_units ==> item_state
  - total_available_pcs ===> item_state
  - current_pcs ===> stocks_state
  - current_units ===> stocks_state
  - damaged_units ===> stocks_state
  - damaged_pcs ===> stocks_state
- equation for updating total available units in item state table (TAI = TAI - (damaged items - previous damaged items))
- equation for updating current items in stock state table  (Current Items = Current Items - (damaged items - previous damaged items))


### Returning items to wholesaler
- The version number will be set 1.6.0
- Effected tables (item_state and stocks_state)
- Effected Fields
  - total_available_units ==> item_state
  - total_available_pcs ===> item_state
  - current_pcs ===> stocks_state
  - current_units ===> stocks_state
  - returned_units_to_supplier ===> stocks_state
  - returned_pcs_to_supplier ===> stocks_state
- equation for updating total available units in item state table (TAI = TAI - (returned items - previous returned items))
- equation for updating current items in stock state table  (Current Items = Current Items - (returned items - previous returned items))

### Deleting stock
- This will set server version to 1.7.0
- To delete stock
  - First update item state (total available items)
  - Second delete stock state conected to the stock
  - Finaly delete stock record
- frontend should make sure stock can be deleted