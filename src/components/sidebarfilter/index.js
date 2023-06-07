import React from "react";

const SidebarFilter = () => {
  return (
    //

    <>
      {
        <div
          id="woocommerce_price_filter-2"
          className="widget woocommerce widget_price_filter px-4 py-10 ml-8 bg-white w-[290px] mb-8 border border-gray-300"
        >
          <span className="gamma widget-title text-black">Filter by price</span>
          <form
            method="get"
            action="https://demo2.pavothemes.com/technocy/shop/"
          >
            <div className="price_slider_wrapper">
              <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                <div className="ui-slider-range ui-corner-all ui-widget-header bg-black opacity-50"></div>
                <span
                  tabIndex="0"
                  className="ui-slider-handle ui-corner-all ui-state-default bg-black opacity-50"
                ></span>
                <span
                  tabIndex="0"
                  className="ui-slider-handle ui-corner-all ui-state-default bg-black opacity-50"
                ></span>
              </div>
              <div className="price_slider_amount" data-step="10">
                <input
                  type="text"
                  id="max_price"
                  name="max_price"
                  value="990"
                  data-max="990"
                  placeholder="Max price"
                  style={{ display: "none" }}
                />

                <div className="price_label flex flex-col w-[250px] py-5">
                  <input type="range" className="" />
                  <div className="flex gap-5 py-3">
                    <div>
                      {" "}
                      Price: <span className="from">$0</span> —{" "}
                      <span className="to">$990</span>
                    </div>
                    <div>
                      <span class="hover:underline hover:text-red-500">
                        Filter
                      </span>
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </form>
        </div>
      }
    </>
  );
};

export default SidebarFilter;
