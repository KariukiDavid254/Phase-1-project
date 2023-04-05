# Phase-1-project

### Car Parking Management System Application
This is a car parking management system application, where all the parking spaces are defined within the system and been allocated to cars for certain period of time.

# Functionalities:
* Sign-in

# Types of user: 
* Booking Counter Agent

# Initialize:
 * Initialize the data with a button click ( (only for Booking Counter Agent))

# Parking Zone Data: 
* Add 3 parking zones by naming them as A, B, and C

# Parking Space Data: 
* Add 30 parking space by naming them as A01...A10,

# Allocation: 
* Remove all transactional data

## Dashboard
* Parking Space Listing (sort by parking_space_title ascending, with filter by parking_zone_title)
* Shows Parking Space Title, Availability (Vacant: Green and Occupied: Gray), Vehicle Registration Number (if occupied)
* Visible to both Booking Counter Agent, Parking Zone Assistant
* Book Parking Space (only for Booking Counter Agent)
     * Require Vehicle Registration Number
* Release Parking Space (only for Booking Counter Agent)
     * Require Vehicle Registration Number
# Reports: Show on the browser
    > Parking Zone Report

#### Entities
  # User
  * user_id
  * name
  * type (Booking Counter Agent)

  # Parking_zone
  * parking_zone_id

  # Vehicle_parking
  * vehicle_parking_id
  * release_time
