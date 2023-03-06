<template>
<nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{disabled: !pageData.has_pre}" >
          <a class="page-link" href="#" @click.prevent="getProducts(pageData.current_page-1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class = "{active: page == pageData.current_page}" v-for="page in pageData.total_pages" :key="page + 'page'"><a class="page-link" href="#" @click.prevent="getProducts(page)" >{{page}}</a></li>
        <li class="page-item" :class="{disabled: !pageData.has_next}" >
          <a class="page-link" href="#" @click.prevent="getProducts(pageData.current_page+1)"  aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>
<script>
export default {
  props: ['pageData', 'getProducts']
}
</script>
