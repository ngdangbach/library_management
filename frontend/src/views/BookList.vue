<template>
  <div class="book-management card shadow-sm p-4">
    
    <header class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
      <h1 class="h3">Quản Lý Danh Mục Sách</h1>
      <button @click="router.push('/books/create')" class="btn btn-primary">
        Thêm Sách Mới
      </button>
    </header>

    <div v-if="bookStore.isLoading" class="alert alert-info">Đang tải dữ liệu...</div>
    <div v-else-if="bookStore.error" class="alert alert-danger">{{ bookStore.error }}</div>

    <div class="table-responsive" v-else>
      <table class="table table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Tồn kho</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="bookStore.books.length === 0">
            <td colspan="5" class="text-center text-muted">Không có dữ liệu sách.</td>
          </tr>
          <tr v-for="book in bookStore.books" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.stock_quantity }}</td>
            <td>
              <button @click="router.push(`/books/edit/${book.id}`)" class="btn btn-warning btn-sm me-2">Sửa</button>
              <button @click="handleDelete(book.id, book.title)" class="btn btn-danger btn-sm">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Script logic (giữ nguyên)
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useBookStore } from '@/stores/bookStore';

const bookStore = useBookStore();
const router = useRouter();

onMounted(() => {
  bookStore.fetchBooks();
});

const handleDelete = async (bookId, bookTitle) => {
  if (confirm(`Bạn có chắc chắn muốn xóa sách "${bookTitle}" không?`)) {
    const success = await bookStore.deleteBook(bookId);
    if (success) {
      alert('Xóa sách thành công!');
    }
  }
};
</script>

<style scoped>
/* XÓA HẾT CSS CŨ TRONG NÀY.
  Chúng ta đang dùng Bootstrap để xử lý toàn bộ giao diện.
*/
.h3 {
  margin-bottom: 0; /* Giữ cho tiêu đề đẹp hơn */
}
</style>