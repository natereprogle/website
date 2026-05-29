<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue";
import headerImage from "@/assets/images/Keys.jpg"
</script>

<template>
  <main>
    <Header subtitle="SSH & PGP Keys" title="" :imageUrl="headerImage"
            imageText="Sign *Everything*!"></Header>
    <div class="mx-7 lg:mx-20 mb-12">
      <div class="neo-divider mb-12"></div>
      <div class="dark:text-white lg:flex lg:justify-between lg:gap-10">
        <section class="space-y-4 pb-8 lg:w-1/2" id="ssh-ed25519-key">
          <h3 class="subheader text-xl md:text-2xl">
            <span class="highlight-blue">SSH Key</span>
          </h3>
          <p class="header">
            Below is my SSH key. I use this almost exclusively for
            GitHub commit signing.
          </p>
          <div class="neo-card bg-white dark:bg-[#4e4e4e] py-3 px-4 w-full break-all">
            <code class="text-sm md:text-base">
              ssh-ed25519 <br class="block md:hidden"/>
              AAAAC3NzaC1lZDI1NTE5AAAAIOays2toJnaF3lloSBn+pU+8b1BnY/FlulMhNyMEv+ZX
            </code>
          </div>
          <p class="header">
            It has a fingerprint of
            <code class="break-all rounded-md border-black border-2 dark:bg-[#4e4e4e] bg-white px-1.5 py-0.5 neo-shadow-sm text-xs md:text-sm">SHA256:YCSOGc+nMfwk/MR+zBHSR+cIjz4GqqMPX+5kvQiDns0</code>.
          </p>
          <div class="flex flex-col space-y-3 pb-8">
            <p class="header">
              As a
              <a
                href="https://reprogle.org/natereprogle_ssh.pub"
                class="font-bold underline">raw file</a>:
            </p>
            <div class="neo-card bg-white dark:bg-[#4e4e4e] py-3 px-4 w-full break-all">
              <code class="text-sm md:text-base">
                curl https://reprogle.org/natereprogle_ssh.pub
                &gt;&gt; ~/.ssh/authorized_keys
              </code>
            </div>
          </div>
        </section>
        <section class="space-y-4 pb-10 lg:w-1/2" id="pgp-key">
          <h3 class="subheader text-xl md:text-2xl">
            <span class="highlight-green">PGP Key</span>
          </h3>
          <p class="header">
            Below is my PGP key I used to use for code signing on
            GitHub. Nowadays it&apos;s never used, but it&apos;s
            here for historical purposes and to verify that I was
            the one who signed those commits.
          </p>
          <div class="neo-card bg-white dark:bg-[#4e4e4e] py-3 px-4 w-full break-words">
            <code class="text-xs md:text-sm leading-5">
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
              class="font-bold underline">raw file</a>:
          </p>
          <div class="neo-card bg-white dark:bg-[#4e4e4e] py-3 px-4 w-full break-all">
            <code class="text-sm md:text-base">curl https://reprogle.org/natereprogle_pgp.gpg | gpg --import</code>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
