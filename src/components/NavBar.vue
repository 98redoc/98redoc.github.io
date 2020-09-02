<template>
    <div>
        <vue-navigation-bar :options="navbarOptions"/>
    </div>
</template>

<script>
import VueNavigationBar from "vue-navigation-bar"
import 'font-awesome/css/font-awesome.css'
import "vue-navigation-bar/dist/vue-navigation-bar.css"
export default {
    data() {
        return {
            navbarOptionsDefault: {
                elementId: "main-navbar",
                isUsingVueRouter: true,
                mobileBreakpoint: 992,
                brandImagePath: "./",
                brandImage: require("../assets/avatar_98redoc.png"),
                brandImageAltText: "98redoc",
                collapseButtonOpenColor: "#661c23",
                collapseButtonCloseColor: "#661c23",
                showBrandImageInMobilePopup: true,
                ariaLabelMainNav: "Main Navigation",
                tooltipAnimationType: "shift-away",
                menuOptionsLeft: [
                    { type: "link", text: "TENSOR BLOG", path: { name: "Home"} },
                    { type: "link", text: "ABOUT ME", path: { name: "About"} },
                ],
                menuOptionsRight: [
                    { type: "button", text: "LOGIN", path: { name: "Login"} }
                ]
            }
        }
    },
    components: {VueNavigationBar},
    computed: {
        navbarOptions() {
            let navbarOption = Object.assign({}, this.navbarOptionsDefault)
            if (this.$store.getters.isAuthenticated) {
                navbarOption.menuOptionsRight = [{
                    type: "link",
                    text: this.$store.getters.user.username,
                    iconRight: '<i class="fa fa-user fa-2x"></i>',
                    path: { name: "signup" },
                    subMenuOptions: [
                        { type: "link", text: "Write Blog", path: { name: "BlogWriter" }, },
                        { type: "hr" },
                        { type: "link", text: "Logout", path: { name: "Logout"} }
                    ]
                }]
            }
            return navbarOption
        }
    },
}
</script>