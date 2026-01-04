<#
.SYNOPSIS
    Generates a new product landing page folder.
.DESCRIPTION
    This script prompts for a product name/ID, creates a subfolder,
    copies the config.js, and creates an index.html that links correctly to the main styles.
#>

param(
    [string]$ProductName
)

# Function to ensure we have a valid folder name
function Get-ValidName {
    param([string]$InputName)
    # Remove invalid characters and spaces, convert to lowercase
    $CleanName = $InputName -replace '[^a-zA-Z0-9\-_]', ''
    $CleanName = $CleanName.ToLower()
    return $CleanName
}

# Interactive mode if parameter not provided
if ([string]::IsNullOrWhiteSpace($ProductName)) {
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host "   AMAZON LANDING PAGE GENERATOR" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host ""
    $ProductName = Read-Host "Enter a name for your new product folder (e.g., 'headphones', 'camera')"
}

$Folder = Get-ValidName $ProductName

if ([string]::IsNullOrWhiteSpace($Folder)) {
    Write-Error "Invalid folder name. Please try again with letters and numbers."
    exit
}

# Check if folder exists
if (Test-Path $Folder) {
    Write-Warning "Folder '$Folder' already exists! Aborting to prevent overwriting."
    exit
}

# Create Folder
New-Item -ItemType Directory -Path $Folder | Out-Null
Write-Host "Created folder: $Folder" -ForegroundColor Green

# 1. Copy config.js (Use the template if available, else the main config)
if (Test-Path "config-template.js") {
    Copy-Item "config-template.js" -Destination "$Folder\config.js"
} else {
    Copy-Item "config.js" -Destination "$Folder\config.js"
}
Write-Host "Created $Folder\config.js" -ForegroundColor Gray

# 2. Create index.html with corrected CSS path
$HTMLContent = Get-Content "index.html" -Raw

# Replace the stylesheet link to point to parent directory
$NewHTML = $HTMLContent -replace 'href="styles.css"', 'href="../styles.css"'

# Save to new folder
$NewHTML | Set-Content "$Folder\index.html"
Write-Host "Created $Folder\index.html" -ForegroundColor Gray

Write-Host ""
Write-Host "SUCCESS! New product page ready." -ForegroundColor Green
Write-Host "------------------------------------------"
Write-Host "1. Go to the '$Folder' folder."
Write-Host "2. Edit 'config.js' with your new product details."
Write-Host "3. Push to GitHub."
Write-Host ""
Write-Host "Your new URL will be:" -ForegroundColor Yellow
Write-Host "https://YOUR-USERNAME.github.io/amazon-products/$Folder/" -ForegroundColor Yellow
Write-Host "------------------------------------------"
Start-Sleep -Seconds 120
