# ADHD Resources

This directory contains downloadable resources for ADHD support.

## Available Resources

- **ADHD-Resource-Pack.pdf** - A comprehensive guide with strategies, tools, and worksheets for managing ADHD

## Adding New Resources

To add new downloadable resources:

1. Place the file in this directory
2. Update the `lib/downloadUtils.js` file to include the new resource
3. Update this README with the new resource information

## File Structure

```
resources/
├── ADHD-Resource-Pack.pdf
└── README.md
```

## Security Note

Files in the `public` directory are accessible to anyone who knows the URL. 
If you need to restrict access, consider implement authentication or using a private file storage solution.
