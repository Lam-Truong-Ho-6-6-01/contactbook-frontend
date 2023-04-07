<template>
    <div v-if="contact" class="page">
        <h4>Hiệu chỉnh Liên hệ</h4>
        <ContactForm @submit:contact="updateContact" />
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
                await ContactService.create(data);
                this.message = 'Liên hệ được tạo thành công.';
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = '';
    },
};
</script>
