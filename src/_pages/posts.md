---
layout: page
title: Blog Posts
page_class: posts
paginate:
  collection: posts
  per_page: 4
---

<section role="list" class="grid">
  <% paginator.resources.each do |post| %>
    <article>
      <img
        slot="image"
        src="<%= post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby' %>"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <h2><%= post.data.title %></h2><br />
      <%= post.data.description %><br />
      <small><%= date_to_string post.data.date, "ordinal" %></small>
      <footer>
        <a href="<%= post.relative_url %>" >
          <button>Read More</button>
        </a>
      </footer>
    </article>
  <% end %>
</section>


<% if paginator.total_pages > 1 %>

  <ul class="pagination">
    <% if paginator.previous_page %>
    <li>
      <a href="<%= paginator.previous_page_path %>">Previous Page</a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li>
      <a href="<%= paginator.next_page_path %>">Next Page</a>
    </li>
    <% end %>
  </ul>
<% end %>
