<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="updateContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactService from '@/services/contact.service';
export default {
    components: {
        ContactForm,
    },
    props: {},
    data() {
        return {
            contact: null,
            message: '',
        };
    },
    methods: {
        async updateContact(data) {
            try {
                await ContactService.update(this.contact._id, data);
                this.message = 'Liên hệ được cập nhật thành công.';
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = '';
    },
};
</script>
