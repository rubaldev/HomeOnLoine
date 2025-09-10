<script>
  import { cn } from "$lib/utils.js"; // adapte selon ton chemin utils
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardDescription from "$lib/components/ui/card/card-description.svelte";
  import CardHeader from "$lib/components/ui/card/card-header.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import { enhance } from "$app/forms";
    import { toast } from "svelte-sonner";

  let {form, className, props} = $props()

</script>

<div class={cn("flex flex-col gap-6", className)} {...props}>
  <Card class="border-none shadow-5">
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form action="?/login" method="post" use:enhance>
        {#if form?.success}
        {( () => toast("connexion reçu!"))()}
        {:else}
        {( () => toast("connexion echouée!"))()}
        {/if}
        <div class="flex flex-col gap-6">
          <div class="grid gap-3">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-3">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/"
                class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >Forgot your password?</a
              >
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              required
            />
          </div>
          <div class="flex flex-col gap-3">
            <Button type="submit" class="w-full bg-neutral-900 text-neutral-50"
              >Login</Button
            >
          </div>
        </div>
        <div class="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" class="underline underline-offset-4">Sign up</a>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
