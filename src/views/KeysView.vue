<script setup lang="ts">
import Header from "@/components/Header.vue";
import headerImage from "@/assets/images/Keys.jpg"
</script>

<template>
  <main>
    <Header subtitle="SSH & PGP Keys" title="" :imageUrl="headerImage"
            imageText="Sign *Everything*!"></Header>
    <div class="dark:text-white lg:mx-auto lg:flex lg:justify-evenly lg:space-x-8 px-4 md:px-8">
      <div class="space-y-4 pb-8" id="ssh-ed25519-key">
        <h3 class="subheader text-xl md:text-2xl">SSH Key</h3>
        <p class="header">
          Below is my SSH key. I use this almost exclusively for
          GitHub commit signing.
        </p>
        <div
          class="w-full break-all rounded-2xl dark:bg-[#4e4e4e] bg-white py-2 px-4 md:w-fit neo-shadow border-black border-4">
          <code>
            ssh-ed25519 <br class="block md:hidden"/>
            AAAAC3NzaC1lZDI1NTE5AAAAIHXj4naNfNjrKvj1Gm0WBAICOrmh3YEQe1h5KHmkFMMf
          </code>
        </div>
        <p class="header">
          It has a fingerprint of
          <code class="break-all rounded-md border-black border-2 dark:bg-[#4e4e4e] bg-white p-[2px] neo-shadow-small">SHA256:+Anww30dTyHENrG1+bkuJcZlhvIGGl+7j1x2VmUfdsg</code>.
        </p>
        <div class="flex flex-col space-y-4 pb-8">
          <p class="header">
            As a
            <a
              href="https://reprogle.org/natereprogle_ssh.pub"
              class="underline">raw file</a>:
          </p>
          <code
            class="w-full break-all rounded-2xl dark:bg-[#4e4e4e] bg-white py-2 px-4 md:w-fit neo-shadow border-black border-4">
            curl https://reprogle.org/natereprogle_ssh.pub
            &gt;&gt; ~/.ssh/authorized_keys
          </code>
        </div>
      </div>
      <div class="space-y-4 pb-10" id="pgp-key">
        <h3 class="subheader text-xl md:text-2xl">PGP Key</h3>
        <p class="header max-w-xl">
          Below is my PGP key I used to use for code signing on
          GitHub. Nowadays it&apos;s never used, but it&apos;s
          here for historical purposes and to verify that I was
          the one who signed those commits.
        </p>
        <div
          class="w-full break-words rounded-2xl dark:bg-[#4e4e4e] bg-white py-2 px-4 md:w-fit neo-shadow border-black border-4">
          <code>
            -----BEGIN PGP PUBLIC KEY BLOCK-----
            <br class="hidden md:block"/>
            mDMEYugSJRYJKwYBBAHaRw8BAQdAKcublhX5k/SKdVEK7D7UQenuyFxdFOcNlDTT
            <br class="hidden md:block"/>
            FYOqRu+0OU5hdGUgUmVwcm9nbGUgKFl1YmlLZXkgR1BHIEtleSkgPG5hdGUucmVw
            <br class="hidden md:block"/>
            cm9nbGVAZ21haWwuY29tPoiTBBMWCgA7FiEEMaXPkdww2zH5XKH1BvXgR5QOnRIF
            <br class="hidden md:block"/>
            AmLoEiUCGwMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQBvXgR5QOnRIX
            <br class="hidden md:block"/>
            cQD+JfjCXbHiow+OG+b93FE1PkdPnoNiaPxu7RqKB4kbZr4BAMqdv+NaKr6VZxoe
            <br class="hidden md:block"/>
            /QdzkwevUYf50+PjcQqOAt2sz8IIuDgEYugSJRIKKwYBBAGXVQEFAQEHQPnsyKC6
            <br class="hidden md:block"/>
            ri7QCkwiHpA/sBpyO6Xv6ysWL+J5wUaG/GwAAwEIB4h4BBgWCgAgFiEEMaXPkdww
            <br class="hidden md:block"/>
            2zH5XKH1BvXgR5QOnRIFAmLoEiUCGwwACgkQBvXgR5QOnRK+rwEAzKcbv4GBrP9C
            <br class="hidden md:block"/>
            iS0zAwt8VrcYXRKpniNk/o8Wl5ac4b4A/1iZfIuzelWbO2W1ehd0vqMQ1fmdGlq7
            <br class="hidden md:block"/>
            8fW3L6xyXysA =Daxa
            <br/>
            -----END PGP PUBLIC KEY BLOCK-----
          </code>
        </div>
        <p class="header">
          As a
          <a
            href="https://reprogle.org/natereprogle_pgp.gpg"
            class="underline">raw file</a>:
        </p>
        <div
          class="w-fit break-all rounded-2xl dark:bg-[#4e4e4e] bg-white py-2 px-4 border-black border-4 neo-shadow">
          <code>curl https://reprogle.org/natereprogle_pgp.gpg | gpg --import</code>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.neo-shadow {
  box-shadow: 6px 6px 0 black;
}

.neo-shadow-small {
  box-shadow: 3px 3px 0 black;
}
</style>
