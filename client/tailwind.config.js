/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        logo: "calc(56px - 0.5rem * 2)",
      },
      padding: {
        sm: "calc(0.5rem - 0px) calc(1rem - 0px)",
        story: "1rem 1rem 0.75rem",
        tag: "clamp(0.25rem, 0.25em, 0.5em) 0.5em",
        detail: "calc(0.25rem - 0px) calc(0.75rem - 0px)",
        "story-content": "calc(2rem + 0.5rem)",
        "border-1": "calc(0.5rem - 1px) calc(1rem - 1px)",
        "border-2": "calc(0.5em - 2px) 0.5em",
        "outline-2": "calc(0.5rem - 2px) calc(1rem - 2px)",
        "post-detail": "2rem 4rem 0 4rem",
      },
      colors: {
        body: "rgb(23, 23, 23)",
        link: "rgb(64, 64, 64)",
        branded: "rgb(59, 73, 223)",
        form: "rgb(212, 212, 212)",
        button: "rgb(38, 38, 38)",
        main: "#F5F5F5",
        secondary: "rgb(115, 115, 115)",
        tertier: "rgb(82, 82, 82)",
        icon: "rgb(245, 245, 245)",
        badge: "rgb(120, 53, 15)",
        like: "rgb(220, 38, 38)",
        comment: "rgb(245, 158, 11)",
        bookmark: "rgb(79, 70, 229)",
        outline: "#D6D6D7",
        "outline-hover": "#A3A3A3",
        "bg-badge": "rgb(252, 211, 77)",
        "base-10": "#EFEFEF",
        "base-70": "#575757",
        "base-80": "#3D3D3D",
        "base-90": "#242424",
        "base-100": "#090909",
        "bg-hover": "rgba(59, 73, 223, 0.1)",
        "branded-border": "rgb(47, 58, 178)",
        "link-hover": "rgb(47, 58, 178)",
        "link-secondary": "#717171",
        "post-name": "rgba(0, 0, 0, 0.035)",
      },
      fontSize: {
        "2xs": "0.8rem",
        "3xs": "0.83rem",
        "4xs": "0.85rem",
        "5xs": "0.87rem",
        "2sm": "0.9rem",
        "3sm": "0.93rem",
        "4sm": "0.95rem",
        "5sm": "0.97rem",
        "2lg": "1.13rem",
        "3lg": "1.15rem",
        "4lg": "1.17rem",
        "5lg": "1.19rem",
      },
      gridTemplateColumns: {
        "container-2": "240px 1fr",
        "container-3": "240px 2fr 1fr",
        "detail-2": "4rem 7fr",
        "detail-3": "4rem 7fr 3fr",
        "profile-info": "1fr 2fr",
      },
      borderRadius: {
        auto: "Max(0px, Min( 0.375rem , calc((100vw - 4px - 100%) * 9999))) / 0.375rem",
      },
      spacing: {
        sm: "calc(0.25rem * -1)",
        link: "calc(0.5rem * -1)",
        icon: "calc(0.5rem - 0px)",
        title: "calc(1.25rem / 2)",
        "profile-info": "calc(1.5rem / 2)",
        "profile-sm": "calc(-1 * 2rem)",
        "profile-md": "calc(-1 * 4rem)",
        "image-post": "calc(90vh - 56px)",
        "button-content": "calc(-1 * 0.5rem)",
        "post-detail": "calc(100vh - 56px - 2 * 1rem)",
      },
      boxShadow: {
        emoticon:
          "0 10px 15px -3px rgba(0, 0, 0 , 0.1), 0 4px 6px -2px rgba(0, 0, 0 , 0.05), 0 0 0 1px rgba(0, 0, 0 , 0.1)",
        "mobile-menu": "0 -1px 5px rgba(0, 0, 0, 0.2)",
        card: "0 0 0 1px rgba(23, 23, 23 , 0.05)",
        "tag-1":
          "inset 0 0 0 1px rgba(204, 52, 45, 0.10), inset 0 0 0 1px rgba(204, 52, 45, 0.10),inset 0 0 0 1px rgba(204, 52, 45, 0.10)",
        "tag-2":
          "inset 0 0 0 1px rgba(74, 36, 93, 0.10), inset 0 0 0 1px rgba(74, 36, 93, 0.10),inset 0 0 0 1px rgba(74, 36, 93, 0.10)",
        "tag-3":
          "inset 0 0 0 1px rgba(0, 131, 53, 0.10), inset 0 0 0 1px rgba(0, 131, 53, 0.10),inset 0 0 0 1px rgba(0, 131, 53, 0.10)",
        "tag-4":
          "inset 0 0 0 1px rgba(137, 6, 6, 0.10), inset 0 0 0 1px rgba(137, 6, 6, 0.10),inset 0 0 0 1px rgba(137, 6, 6, 0.10)",
        "user-detail":
          "0 10px 15px -3px rgba(0, 0, 0 , 0.1), 0 4px 6px -2px rgba(0, 0, 0 , 0.05), 0 0 0 1px rgba(0, 0, 0 , 0.1)",
      },
      backgroundColor: {
        detail: "rgba(0, 0, 0, 0.035)",
        "tag-1": "rgba(204, 52, 45, 0.10)",
        "tag-2": "rgba(74, 36, 93, 0.10)",
        "tag-3": "rgba(0, 131, 53, 0.10)",
        "tag-4": "rgba(137, 6, 6, 0.10)",
      },
      aspectRatio: {
        "image-post": "auto 1000 / 420",
      },
      inset: {
        emoticon: "calc(56px + 1rem + 6vh)",
      },
      backgroundImage: {
        profile: "linear-gradient(180deg, #000000 8rem, transparent 8rem)",
      },
    },
  },
  plugins: [],
};
