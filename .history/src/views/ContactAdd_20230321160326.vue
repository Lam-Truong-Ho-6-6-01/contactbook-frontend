<template>
    <ContactForm :contact="contact" @submit:contact="createContact" />
    <div v-if="contact" class="page">
        <h4>Hiệu chỉnh Liên hệ</h4>
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
    // props: {
    //     address: { type: String, required: true },
    //     email: { type: String, required: true },
    //     name: { type: String, required: true },
    //     phone: { type: Number, required: true },
    //     favorite: { type: Boolean },
    // },
    data() {
        return {
            contact: null,
            message: '',
        };
    },

    methods: {
        async createContact(data) {
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
