<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pageData.has_pre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="getDatas(pageData.current_page - 1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-if="pageData.total_pages > 10">
        <template v-if="pageData.current_page <= 6">
          <li
            class="page-item"
            :class="{ active: page == pageData.current_page }"
            v-for="page in 9"
            :key="'page' + page"
          >
            <a class="page-link" href="#" @click.prevent="getDatas(page)">{{
              page
            }}</a>
          </li>
          <li
            class="page-item"
            :class="{
              disabled: pageData.current_page >= pageData.total_pages - 9
            }"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page + 10)"
              >...</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: page == pageData.total_pages }"
            :key="'page' + pageData.total_pages"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.total_pages)"
              >{{ pageData.total_pages }}</a
            >
          </li>
        </template>
        <template v-else-if="pageData.current_page >= pageData.total_pages - 5">
          <li
            class="page-item"
            :class="{ active: page == 1 }"
            :key="'page' + 1 "
          >
            <a class="page-link" href="#" @click.prevent="getDatas(1)">1</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pageData.current_page <= 10 }"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page - 10)"
              >...</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: page == pageData.total_pages - page + 1 }"
            v-for="page in 9"
            :key="'page' + page"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.total_pages - page + 1)"
              >{{ pageData.total_pages - page + 1 }}</a
            >
          </li>
        </template>
        <template v-else>
          <li
            class="page-item"
            :class="{ active: page == 1 }"
            :key="'page' + 1"
          >
            <a class="page-link" href="#" @click.prevent="getDatas(1)">1</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pageData.current_page <= 10 }"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page - 10)"
              >...</a
            >
          </li>
          <li
            class="page-item"
            v-for="i in 4"
            :key="'page' + (pageData.current_page - 5 + i)"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page - 5 + i)"
              >{{ pageData.current_page - 5 + i }}</a
            >
          </li>
          <li class="page-item active">
            <span class="page-link">{{ pageData.current_page }}</span>
          </li>
          <li
            class="page-item"
            v-for="i in 4"
            :key="'page' + (pageData.current_page + i)"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page + i)"
              >{{ pageData.current_page + i }}</a
            >
          </li>
          <li
            class="page-item"
            :class="{
              disabled: pageData.current_page >= pageData.total_pages - 9
            }"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.current_page + 10)"
              >...</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: page == pageData.total_pages }"
            :key="'page' + pageData.total_pages"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="getDatas(pageData.total_pages)"
              >{{ pageData.total_pages }}</a
            >
          </li>
        </template>
      </template>
      <template v-else>
        <li
          class="page-item"
          :class="{ active: page == pageData.current_page }"
          v-for="page in pageData.total_pages"
          :key="page + 'page'"
        >
          <a class="page-link" href="#" @click.prevent="getDatas(page)">{{
            page
          }}</a>
        </li>
      </template>
      <li class="page-item" :class="{ disabled: !pageData.has_next }">
        <a
          class="page-link"
          href="#"
          @click.prevent="getDatas(pageData.current_page + 1)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pageData', 'getDatas', 'page']
}
</script>
