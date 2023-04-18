<template>
  <div
    class="box-flex bg-white sm:w-100 w-50 p-relative pa-zero br-xs bs-4"
    style="max-width: 768px"
  >
    <picture
      class="product-informations-picture"
      data-testid="item-modifier-product-image"
      style="
        background-image: url('https://micro-assets.foodora.com/img/logo-simple-fp.svg');
      "
      ><div
        class="product-informations-image"
        style="
          background-image: url('https://images.deliveryhero.io/image/fd-tw/Products/11476011.jpg?width=1200');
        "
      ></div
    ></picture>
    <div class="box-flex pa-sm">
      <div class="box-flex ai-start fd-row">
        <h2
          class="grow cl-neutral-primary sm:f-title-medium-font-size f-title-large-font-size sm:fw-title-medium-font-weight fw-title-large-font-weight ma-zero"
          data-testid="item-modifier-product-name"
        >
          【套餐 A】總匯三明治套餐
        </h2>
        <span
          class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
          data-testid="item-modifier-product-price"
          >$ 180</span
        >
      </div>
      <p
        class="btm-neutral-border cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height ma-zero pt-xs pb-sm"
        data-testid="item-modifier-product-description"
      >
        可選【招牌/豬排/花枝/培根/鮪魚/薯餅總匯】，擇一 | 5塊雞塊、飲料
      </p>
    </div>
    <div
      class="box-flex item-modifier-selection-section required-list invalid-section pt-sm pb-xs"
      data-testid="item-modifier-options-list"
      data-invalid-section="true"
    >
      <div class="box-flex mb-sm px-sm">
        <h3 class="box-flex ai-start jc-space-between fd-row">
          <span
            class="cl-neutral-primary sm:f-title-small-font-size md:f-title-small-font-size f-title-medium-font-size sm:fw-title-small-font-weight md:fw-title-small-font-weight fw-title-medium-font-weight"
            data-testid="item-modifier-options-section-title"
            >套餐選擇</span
          >
          <div
            class="box-flex no-shrink upper-case item-modifier-options-section-tag invalid-options-section-tag bg-information-highlight ml-xs px-xs py-xxs br-xxxs"
          >
            <span
              class="item-modifier-options-section-tag-text cl-information f-label-small-font-size fw-label-small-font-weight lh-label-small-line-height"
              data-testid="item-modifier-options-section-tag"
              >1 必填</span
            >
          </div>
        </h3>
        <p
          class="item-modifier-options-section-description cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxs"
          data-testid="item-modifier-options-section-description"
        >
          選擇1個
        </p>
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 039071570-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 0"
            value="39071570"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">招牌總匯 (雞塊)</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 039071571-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 0"
            value="39071571"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">豬排總匯 (雞塊)</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 039071572-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 0"
            value="39071572"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">培根總匯 (雞塊)</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 039071573-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 0"
            value="39071573"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">花枝總匯 (雞塊)</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 039071574-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 0"
            value="39071574"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">薯餅總匯 (雞塊)</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <button
        class="box-flex ai-center fd-row ma-sm pr-sm pt-zero"
        data-testid="item-modifier-toppings-show-more"
      >
        <span
          class="sm:mr-xs mr-sm"
          data-testid="item-modifier-show-more-collapsed"
          ><svg
            aria-hidden="true"
            focusable="false"
            class="fl-interaction-primary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5303 8.44352C18.7966 8.70977 18.8208 9.12643 18.603 9.42006L18.5304 9.50418L12.3286 15.7069C12.1728 15.8628 11.9204 15.8632 11.764 15.708L5.47165 9.46235C5.17767 9.17055 5.1759 8.69568 5.4677 8.4017C5.73298 8.13445 6.14955 8.10869 6.44397 8.32545L6.52835 8.39775L11.7602 13.5894C11.9165 13.7446 12.169 13.7441 12.3248 13.5883L17.4696 8.44361C17.7359 8.17732 18.1525 8.15308 18.4462 8.37091L18.5303 8.44352Z"
            ></path></svg></span
        ><span
          class="cl-interaction-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
          >查看更多 (1)</span
        >
      </button>
    </div>
    <div
      class="box-flex item-modifier-selection-section required-list invalid-section pt-sm pb-xs"
      data-testid="item-modifier-options-list"
      data-invalid-section="true"
    >
      <div class="box-flex mb-sm px-sm">
        <h3 class="box-flex ai-start jc-space-between fd-row">
          <span
            class="cl-neutral-primary sm:f-title-small-font-size md:f-title-small-font-size f-title-medium-font-size sm:fw-title-small-font-weight md:fw-title-small-font-weight fw-title-medium-font-weight"
            data-testid="item-modifier-options-section-title"
            >飲料選擇</span
          >
          <div
            class="box-flex no-shrink upper-case item-modifier-options-section-tag invalid-options-section-tag bg-information-highlight ml-xs px-xs py-xxs br-xxxs"
          >
            <span
              class="item-modifier-options-section-tag-text cl-information f-label-small-font-size fw-label-small-font-weight lh-label-small-line-height"
              data-testid="item-modifier-options-section-tag"
              >1 必填</span
            >
          </div>
        </h3>
        <p
          class="item-modifier-options-section-description cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxs"
          data-testid="item-modifier-options-section-description"
        >
          選擇1個
        </p>
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 142058563-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 1"
            value="42058563"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">紅茶</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 142058564-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 1"
            value="42058564"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">奶茶</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 142323003-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 1"
            value="42323003"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">鮮奶茶</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >$ 15</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 142323004-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 1"
            value="42323004"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">豆漿</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 142323005-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 1"
            value="42323005"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">無糖豆漿</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <button
        class="box-flex ai-center fd-row ma-sm pr-sm pt-zero"
        data-testid="item-modifier-toppings-show-more"
      >
        <span
          class="sm:mr-xs mr-sm"
          data-testid="item-modifier-show-more-collapsed"
          ><svg
            aria-hidden="true"
            focusable="false"
            class="fl-interaction-primary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5303 8.44352C18.7966 8.70977 18.8208 9.12643 18.603 9.42006L18.5304 9.50418L12.3286 15.7069C12.1728 15.8628 11.9204 15.8632 11.764 15.708L5.47165 9.46235C5.17767 9.17055 5.1759 8.69568 5.4677 8.4017C5.73298 8.13445 6.14955 8.10869 6.44397 8.32545L6.52835 8.39775L11.7602 13.5894C11.9165 13.7446 12.169 13.7441 12.3248 13.5883L17.4696 8.44361C17.7359 8.17732 18.1525 8.15308 18.4462 8.37091L18.5303 8.44352Z"
            ></path></svg></span
        ><span
          class="cl-interaction-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
          >查看更多 (14)</span
        >
      </button>
    </div>
    <div
      class="box-flex item-modifier-selection-section required-list invalid-section pt-sm pb-xs"
      data-testid="item-modifier-options-list"
      data-invalid-section="true"
    >
      <div class="box-flex mb-sm px-sm">
        <h3 class="box-flex ai-start jc-space-between fd-row">
          <span
            class="cl-neutral-primary sm:f-title-small-font-size md:f-title-small-font-size f-title-medium-font-size sm:fw-title-small-font-weight md:fw-title-small-font-weight fw-title-medium-font-weight"
            data-testid="item-modifier-options-section-title"
            >飲料冷熱冰選擇（部分飲品無提供熱飲，將直接出餐冷飲或冰飲）</span
          >
          <div
            class="box-flex no-shrink upper-case item-modifier-options-section-tag invalid-options-section-tag bg-information-highlight ml-xs px-xs py-xxs br-xxxs"
          >
            <span
              class="item-modifier-options-section-tag-text cl-information f-label-small-font-size fw-label-small-font-weight lh-label-small-line-height"
              data-testid="item-modifier-options-section-tag"
              >1 必填</span
            >
          </div>
        </h3>
        <p
          class="item-modifier-options-section-description cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxs"
          data-testid="item-modifier-options-section-description"
        >
          選擇1個
        </p>
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 242058560-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 2"
            value="42058560"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">冰飲</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 242058561-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 2"
            value="42058561"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name"
                >冷飲【不加冰塊】</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="radio-box grow option-row-input py-st"
          id="topping - 242058562-label"
          ><input
            type="radio"
            class="radio-input-component"
            name="topping - 2"
            value="42058562"
          /><span class="radio-button"></span
          ><span
            class="radio-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">熱飲</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >免費</span
              ></span
            ></span
          ></label
        >
      </div>
    </div>
    <div
      class="box-flex item-modifier-selection-section pt-sm pb-xs"
      data-testid="item-modifier-options-list"
    >
      <div class="box-flex mb-sm px-sm">
        <h3 class="box-flex ai-start jc-space-between fd-row">
          <span
            class="cl-neutral-primary sm:f-title-small-font-size md:f-title-small-font-size f-title-medium-font-size sm:fw-title-small-font-weight md:fw-title-small-font-weight fw-title-medium-font-weight"
            data-testid="item-modifier-options-section-title"
            >沙拉醬調整</span
          >
          <div
            class="box-flex no-shrink upper-case item-modifier-options-section-tag bg-neutral-divider ml-xs px-xs py-xxs br-xxxs"
          >
            <span
              class="item-modifier-options-section-tag-text cl-neutral-secondary f-label-small-font-size fw-label-small-font-weight lh-label-small-line-height"
              data-testid="item-modifier-options-section-tag"
              >可選擇填寫</span
            >
          </div>
        </h3>
        <p
          class="item-modifier-options-section-description cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxs"
          data-testid="item-modifier-options-section-description"
        >
          最多可選擇1個 (可不選擇)
        </p>
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="checkbox grow option-row-input py-st"
          for="topping - 353629673"
          id="topping - 353629673-label"
          ><input
            type="checkbox"
            id="topping - 353629673"
            aria-checked="false"
            name="topping - 3"
            value="53629673"
          />
          <div class="checkbox-container">
            <svg
              aria-hidden="true"
              focusable="false"
              class="checkmark"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
              ></path>
            </svg>
          </div>
          <span
            class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">沙拉換奶油</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >$ 15</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="checkbox grow option-row-input py-st"
          for="topping - 353629674"
          id="topping - 353629674-label"
          ><input
            type="checkbox"
            id="topping - 353629674"
            aria-checked="false"
            name="topping - 3"
            value="53629674"
          />
          <div class="checkbox-container">
            <svg
              aria-hidden="true"
              focusable="false"
              class="checkmark"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
              ></path>
            </svg>
          </div>
          <span
            class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">沙拉換花生</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >$ 15</span
              ></span
            ></span
          ></label
        >
      </div>
      <div
        class="box-flex option-row ai-center jc-space-between fd-row px-sm"
        data-testid="item-modifier-topping"
      >
        <label
          class="checkbox grow option-row-input py-st"
          for="topping - 353629675"
          id="topping - 353629675-label"
          ><input
            type="checkbox"
            id="topping - 353629675"
            aria-checked="false"
            name="topping - 3"
            value="53629675"
          />
          <div class="checkbox-container">
            <svg
              aria-hidden="true"
              focusable="false"
              class="checkmark"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
              ></path>
            </svg>
          </div>
          <span
            class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
            ><span class="box-flex grow w-100 ai-center jc-space-between fd-row"
              ><span data-testid="item-modifier-item-name">沙拉換草莓</span
              ><span
                class="no-shrink cl-neutral-secondary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                data-testid="item-modifier-item-price"
                >$ 15</span
              ></span
            ></span
          ></label
        >
      </div>
    </div>
    <div
      class="box-flex item-modifier-selection-section pt-sm pb-xs"
      data-testid="cross-sell-as-topping-item-modifier"
    >
      <div class="box-flex mb-sm px-sm">
        <h3 class="box-flex ai-start jc-space-between fd-row">
          <span
            class="cl-neutral-primary sm:f-title-small-font-size md:f-title-small-font-size f-title-medium-font-size sm:fw-title-small-font-weight md:fw-title-small-font-weight fw-title-medium-font-weight"
            data-testid="item-modifier-options-section-title"
            >經常一起訂購的餐點</span
          >
          <div
            class="box-flex no-shrink upper-case item-modifier-options-section-tag bg-neutral-divider ml-xs px-xs py-xxs br-xxxs"
          >
            <span
              class="item-modifier-options-section-tag-text cl-neutral-secondary f-label-small-font-size fw-label-small-font-weight lh-label-small-line-height"
              data-testid="item-modifier-options-section-tag"
              >可選擇填寫</span
            >
          </div>
        </h3>
        <p
          class="item-modifier-options-section-description cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxs"
          data-testid="item-modifier-options-section-description"
        >
          其他顧客也訂購了
        </p>
      </div>
      <div class="box-flex option-row cross-sell-option-row fd-column">
        <div class="box-flex ai-center jc-space-between fd-row px-sm">
          <label
            class="checkbox grow option-row-input py-st"
            for="薯條11477924"
            id="薯條11477924-label"
            ><input
              type="checkbox"
              id="薯條11477924"
              name="variation"
              value="11477924"
            />
            <div class="checkbox-container">
              <svg
                aria-hidden="true"
                focusable="false"
                class="checkmark"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 8"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
                ></path>
              </svg>
            </div>
            <span
              class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
              ><span
                class="box-flex grow w-100 ai-center fd-row"
                data-testid="cross-sell-as-topping-item-modifier-item"
                ><div class="box-flex small-img__img-container">
                  <img
                    data-testid="item-modifier-cross-sell-toppings-small-image"
                    src="https://images.deliveryhero.io/image/fd-tw/Products/11477924.jpg?width=120&amp;height=120"
                    alt="薯條"
                  />
                </div>
                <div class="box-flex ml-xxs">
                  <p
                    class="small-img__product-name cl-neutral-primary f-ribbon-base-font-size fw-ribbon-base-font-weight lh-ribbon-base-line-height"
                  >
                    薯條
                  </p>
                </div>
                <div class="box-flex small-img__topping-price-container">
                  <p
                    class="small-img__topping-price f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                    data-testid="Cross-sell topping price"
                  >
                    + $ 40
                  </p>
                </div></span
              ></span
            ></label
          >
        </div>
      </div>
      <div class="box-flex option-row cross-sell-option-row fd-column">
        <div class="box-flex ai-center jc-space-between fd-row px-sm">
          <label
            class="checkbox grow option-row-input py-st"
            for="鮮堡雞塊11477915"
            id="鮮堡雞塊11477915-label"
            ><input
              type="checkbox"
              id="鮮堡雞塊11477915"
              name="variation"
              value="11477915"
            />
            <div class="checkbox-container">
              <svg
                aria-hidden="true"
                focusable="false"
                class="checkmark"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 8"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
                ></path>
              </svg>
            </div>
            <span
              class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
              ><span
                class="box-flex grow w-100 ai-center fd-row"
                data-testid="cross-sell-as-topping-item-modifier-item"
                ><div class="box-flex small-img__img-container">
                  <img
                    data-testid="item-modifier-cross-sell-toppings-small-image"
                    src="https://images.deliveryhero.io/image/fd-tw/Products/11477915.jpg?width=120&amp;height=120"
                    alt="鮮堡雞塊"
                  />
                </div>
                <div class="box-flex ml-xxs">
                  <p
                    class="small-img__product-name cl-neutral-primary f-ribbon-base-font-size fw-ribbon-base-font-weight lh-ribbon-base-line-height"
                  >
                    鮮堡雞塊
                  </p>
                </div>
                <div class="box-flex small-img__topping-price-container">
                  <p
                    class="small-img__topping-price f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                    data-testid="Cross-sell topping price"
                  >
                    + $ 55
                  </p>
                </div></span
              ></span
            ></label
          >
        </div>
      </div>
      <div class="box-flex option-row cross-sell-option-row fd-column">
        <div class="box-flex ai-center jc-space-between fd-row px-sm">
          <label
            class="checkbox grow option-row-input py-st"
            for="薯餅塔11477916"
            id="薯餅塔11477916-label"
            ><input
              type="checkbox"
              id="薯餅塔11477916"
              name="variation"
              value="11477916"
            />
            <div class="checkbox-container">
              <svg
                aria-hidden="true"
                focusable="false"
                class="checkmark"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 8"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.7508 0.533146C9.04369 0.240253 9.51856 0.240253 9.81146 0.533146C10.0777 0.799413 10.1019 1.21608 9.88408 1.50969L9.81146 1.59381L3.65613 7.74914L0.219548 4.31256C-0.0733454 4.01966 -0.0733454 3.54479 0.219548 3.2519C0.485814 2.98563 0.902478 2.96142 1.19609 3.17928L1.28021 3.2519L3.656 5.6271L8.7508 0.533146Z"
                ></path>
              </svg>
            </div>
            <span
              class="checkbox-text f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
              ><span
                class="box-flex grow w-100 ai-center fd-row"
                data-testid="cross-sell-as-topping-item-modifier-item"
                ><div class="box-flex small-img__img-container">
                  <img
                    data-testid="item-modifier-cross-sell-toppings-small-image"
                    src="https://images.deliveryhero.io/image/fd-tw/Products/11477916.jpg?width=120&amp;height=120"
                    alt="薯餅塔"
                  />
                </div>
                <div class="box-flex ml-xxs">
                  <p
                    class="small-img__product-name cl-neutral-primary f-ribbon-base-font-size fw-ribbon-base-font-weight lh-ribbon-base-line-height"
                  >
                    薯餅塔
                  </p>
                </div>
                <div class="box-flex small-img__topping-price-container">
                  <p
                    class="small-img__topping-price f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
                    data-testid="Cross-sell topping price"
                  >
                    + $ 45
                  </p>
                </div></span
              ></span
            ></label
          >
        </div>
      </div>
      <button
        class="box-flex ai-center fd-row ma-sm pr-sm pt-zero"
        data-testid="item-modifier-toppings-show-more"
      >
        <span
          class="sm:mr-xs mr-sm"
          data-testid="item-modifier-cross-sell-toppings-show-more"
          ><svg
            aria-hidden="true"
            focusable="false"
            class="fl-interaction-primary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5303 8.44352C18.7966 8.70977 18.8208 9.12643 18.603 9.42006L18.5304 9.50418L12.3286 15.7069C12.1728 15.8628 11.9204 15.8632 11.764 15.708L5.47165 9.46235C5.17767 9.17055 5.1759 8.69568 5.4677 8.4017C5.73298 8.13445 6.14955 8.10869 6.44397 8.32545L6.52835 8.39775L11.7602 13.5894C11.9165 13.7446 12.169 13.7441 12.3248 13.5883L17.4696 8.44361C17.7359 8.17732 18.1525 8.15308 18.4462 8.37091L18.5303 8.44352Z"
            ></path></svg></span
        ><span
          class="cl-interaction-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height"
          >查看更多 (5)</span
        >
      </button>
    </div>
    <div class="box-flex item-modifier-order-actions pl-sm pr-sm pt-sm">
      <div class="box-flex mb-sm">
        <h3
          class="cl-neutral-primary f-title-small-font-size fw-title-small-font-weight lh-title-small-line-height ma-zero"
          id="product-special-instructions-title"
        >
          餐點備註
        </h3>
        <p
          class="cl-neutral-primary f-paragraph-small-font-size fw-paragraph-small-font-weight lh-paragraph-small-line-height mt-xxxs mb-sm"
        >
          請體諒店家製餐恐有其限制，未符合期待還請多包容哦
        </p>
        <div class="input-box">
          <textarea
            id="item-modifier-special-instructions"
            placeholder="例：不要香菜、加辣"
            class="valid"
            aria-label=""
            aria-labelledby="product-special-instructions-title"
            aria-controls="item-modifier-special-instructions"
            aria-describedby="item-modifier-special-instructions-label"
            aria-autocomplete="inline"
            maxlength="500"
            data-testid="item-modifier-special-instructions"
          ></textarea
          ><label
            for="item-modifier-special-instructions"
            id="item-modifier-special-instructions-label"
          ></label>
        </div>
      </div>
      <div class="box-flex product-sold-out-options-wrapper bg-white">
        <h3
          class="cl-neutral-primary f-title-small-font-size fw-title-small-font-weight lh-title-small-line-height"
        >
          若此商品目前暫時無法供應
        </h3>
        <div class="box-flex dropdown-root mt-sm">
          <div
            class="cl-dropdown-root us"
            data-testid="sold-out-options-dropdown"
            role="button"
            tabindex="0"
          >
            <div
              class="box-flex cl-dropdown-control cp bc-neutral-border"
              id="sold-out-options-dropdown-drop-down"
              aria-label="sold-out-options-dropdown-drop-down"
            >
              <div class="w-90">將此商品從我的訂單中移除</div>
              <svg
                aria-hidden="true"
                focusable="false"
                class="fl-interaction-primary"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <defs>
                  <path
                    d="M11.791 13.4l4.26-4.254a.501.501 0 01.708 0l.694.694a.5.5 0 010 .707l-5.308 5.302a.501.501 0 01-.708 0l-5.29-5.284a.5.5 0 010-.707l.694-.694a.501.501 0 01.708 0l4.242 4.237z"
                    id="sIcChevronDownSm"
                  ></path>
                </defs>
                <use xlink:href="#sIcChevronDownSm" fill-rule="evenodd"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="box-flex product-add-to-cart bg-white w-100 fd-row p-relative l-zero b-zero pa-sm bs-3"
    >
      <div class="box-flex ai-center jc-center fd-row mr-st">
        <button
          class="pa-xs box-flex ai-center jc-center"
          aria-label="Remove item"
          data-testid="item-modifier-decrease-quantity"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            class="fl-neutral-inactive"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <defs><path id="sIcMinus" d="M4 11h16v2H4z"></path></defs>
            <use xlink:href="#sIcMinus" fill-rule="evenodd"></use>
          </svg></button
        ><span
          class="f-title-small-font-size fw-title-small-font-weight lh-title-small-line-height px-xxs"
          data-testid="item-modifier-product-count"
          >1</span
        ><button
          class="box-flex ai-center jc-center pa-xs"
          aria-label="Increase quantity"
          data-testid="item-modifier-increase-quantity"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            class="fl-interaction-primary"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <defs>
              <path
                d="M13 4v7h7v2h-7.001L13 20h-2l-.001-7H4v-2h7V4h2z"
                id="sIcPlus"
              ></path>
            </defs>
            <use xlink:href="#sIcPlus" fill-rule="evenodd"></use>
          </svg>
        </button>
      </div>
      <button
        class="button status--default item-modifier-add-to-cart-button disabled-add-to-cart-button"
        data-testid="modal-add-to-cart"
        aria-live="polite"
      >
        <span>放入購物車</span>
      </button>
    </div>
    <button
      data-testid="item-modifier-modal-close-btn"
      class="modal-close-button"
      aria-label="關閉"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        class="fl-interaction-primary"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.594 6.21967C18.8625 6.48816 18.8849 6.90955 18.6612 7.20353L18.594 7.28033L13.7504 12.124C13.5941 12.2802 13.5941 12.5335 13.7504 12.6897L18.594 17.5334C18.8869 17.8263 18.8869 18.3011 18.594 18.594C18.3256 18.8625 17.9042 18.8849 17.6102 18.6612L17.5334 18.594L12.6897 13.7504C12.5335 13.5941 12.2802 13.5941 12.124 13.7504L7.28033 18.594C6.98744 18.8869 6.51256 18.8869 6.21967 18.594C5.95118 18.3256 5.92881 17.9042 6.15255 17.6102L6.21967 17.5334L11.0634 12.6897C11.2196 12.5335 11.2196 12.2802 11.0634 12.124L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.48816 5.95118 6.90955 5.92881 7.20353 6.15255L7.28033 6.21967L12.124 11.0634C12.2802 11.2196 12.5335 11.2196 12.6897 11.0634L17.5334 6.21967C17.8263 5.92678 18.3011 5.92678 18.594 6.21967Z"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script>

export default {
  data () {
    return {
      drink: [{ cold: '冷飲(去冰)' }, { ice: '冰飲' }, { hot: '熱飲' }]
    }
  }
}
</script>
