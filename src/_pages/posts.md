---
layout: page
title: Posts
paginate:
  collection: posts
  per_page: 4
---

<ul class="grid blog" role="list" data-layout='50-50'>
  <% paginator.resources.each do |post| %>
  <li class="card border-2 flow overflow-hidden">
    <img class="ar-image" src="<%= post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby' %>">
    <h2>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </h2>
    <p class="text-small"><%= date_to_string post.data.date, "ordinal" %></p>
    <p><%= post.data.description %></p>
  </li>
  <% end %>
</ul>

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
