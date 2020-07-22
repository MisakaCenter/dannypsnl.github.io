import SiteLink from "./site-link"
import React from "react"

export const BuyMeACoffee = () => (
  <div>
    <SiteLink className="bmc-button" url="https://www.buymeacoffee.com/zclIv4D">
      <img
        src="https://cdn.buymeacoffee.com/buttons/default-white.png"
        alt="Buy Me A Coffee"
        style={{
          height: `51px`,
          width: `217px`,
          marginTop: `1em`,
          marginBottom: `0`,
        }}
      />
    </SiteLink>
  </div>
)
