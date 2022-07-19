import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants) // req, res) => res.send("hello world"))
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

// export default router

router
    .route("/review")
    .post(ReviewCtrl.apiPostReview)
    .put(ReviewCtrl.apiUdapteReview)
    .delete(ReviewCtrl.apiDeleteReview)

export default router